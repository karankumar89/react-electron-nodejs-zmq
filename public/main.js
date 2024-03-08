// main.js
const { app, BrowserWindow, ipcMain } = require("electron");
const zmq = require("zeromq");
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;

const pullSocket = zmq.socket("pull");
pullSocket.connect("tcp://127.0.0.1:3002");

const pushSocket = zmq.socket("push");
pushSocket.bindSync('tcp://127.0.0.1:4002');

pullSocket.on("message", (message) => {
  const data = message.toString();
  console.log("Received message in Electron main process:", data);

  // Handle the received data in the main process as needed.
  // For example, send the data to the renderer processes using IPC.
  mainWindow.webContents.send("message-from-main", data);
});

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  // mainWindow.loadFile('build/index.html');
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  ipcMain.on("message-from-renderer", (event, data) => {
    console.log(
      "Received message in Electron main process from renderer:",
      data
    );
  });

  ipcMain.on('get-message-from-react', (event, message) => {
    console.log('message recieved from react: ',message);
    pushSocket.send(message);
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
