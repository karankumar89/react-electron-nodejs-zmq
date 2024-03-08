# react-electron-zeromq

## Description
A template project for creating desktop applications using React, Electron, and ZeroMQ.

|React| <--`ipc communication`--> |Electron| <--`push/pull socket communications via ZeroMQ`--> |NodeJS| 

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server and Electron concurrently.

## Usage
- This project combines React for the frontend, Electron for the desktop application framework, and ZeroMQ for messaging.
- Modify `backend.js` for your server-side logic.
- Modify `public/main.js` for Electron main process logic.
- Use ZeroMQ for inter-process communication.

## Scripts
- `npm start`: Concurrently starts the React development server and Electron.
- `npm run server`: Starts the backend server.
- `npm run electron`: Starts Electron.
- `npm run package`: Packages the Electron application for Windows.
- `npm run electron-builder`: Builds the Electron application using Electron Builder.
- `npm run electron-build`: Builds the React app and then builds the Electron application.
- `npm run react-start`: Starts the React development server.
- `npm run build`: Builds the React app for production.
- `npm test`: Runs tests.
- `npm run eject`: Ejects from create-react-app.
- make sure to use `npx electron-rebuild` before starting or building the electron app

## Dependencies
- python 2.7
- node LTS (v20)
- read docs on node-gyp and zeromq for building errors

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
