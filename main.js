const { app, BrowserWindow, ipcMain, dialog } = require('electron');

const path = require('path');
const fs = require('fs');
const YAML = require('yaml');

const PORT = process.env.NODE_ENV === 'development' ? 8080 : 3070;

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      sandbox: true,
      nodeIntegration: false,
      devTools: true,
      preload: path.join(__dirname, '/preload.js'),
    },
  });

  // load the index.html from a url
  win.loadURL(`http://localhost:${PORT}`);

  // Open the DevTools.
  win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Function for saving YAML files to user's OS directory
ipcMain.on('chooseDir', (random, random2, random3) => {
  dialog
    .showSaveDialog({
      title: 'Save',
      defaultPath: path.join(__dirname, `/${random2}.yaml`),
      buttonLabel: 'Create',
      filter: [
        {
          name: 'YAML Files',
          extensions: ['yaml'],
        },
      ],
      properties: [],
    })
    .then((file) => {
      console.log(file.canceled);

      if (!file.canceled) {
        console.log(file.filePath.toString());
        const doc = new YAML.Document();
        doc.contents = random3;

        fs.writeFile(file.filePath.toString(), doc.toString(), (err) => {
          if (err) throw err;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
