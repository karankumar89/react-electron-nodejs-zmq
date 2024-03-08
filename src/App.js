import React, { useState, useEffect } from 'react';
const { ipcRenderer } = window.require("electron");

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for messages from the Electron main process
    ipcRenderer.on('message-from-main', (event, data) => {
      console.log('Received message in React:', data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup the IPC event listener when the component unmounts
    return () => {
      ipcRenderer.removeAllListeners('message-from-main');
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  const sendMessage = () =>{
    ipcRenderer.send('get-message-from-react', 'Hello! from React');
  }

  return (
    <div>
      <h1>Hello, Electron with React and ZMQ!</h1>
      <h3><button onClick={sendMessage}>Send Message</button></h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;