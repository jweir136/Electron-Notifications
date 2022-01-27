let { app, BrowserWindow, Notification, Menu } = require("electron");

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    });

    new Notification({"title":"TITLE", "body":"BODY"});
  
    win.loadFile('index.html');
}

const dockMenu = Menu.buildFromTemplate([
    {
      label: 'New Window',
      click () { console.log('New Window') }
    }, {
      label: 'New Window with Settings',
      submenu: [
        { label: 'Basic' },
        { label: 'Pro' }
      ]
    },
    { label: 'New Command...' }
  ]);
  
  app.whenReady().then(() => {
    if (process.platform === 'darwin') {
      app.dock.setMenu(dockMenu)
    }
  }).then(createWindow);