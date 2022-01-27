let { app, BrowserWindow, Notification } = require("electron");

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    });

    new Notification({"title":"TITLE", "body":"BODY"});
  
    win.loadFile('index.html');
  }
  
  app.whenReady().then(createWindow);