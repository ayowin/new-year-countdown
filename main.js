// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow,ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: 'icon.png',
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      enableRemoteModule: true,
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  // mainWindow.loadFile('index.html')

  mainWindow.loadFile('indexFirework.html')

  // dev tool
  // mainWindow.webContents.openDevTools()
}

const ipcEvent = () => {
  ipcMain.on('openSetWindow',()=>{
    const setWindow = new BrowserWindow({
      width: 400,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        enableRemoteModule: true,
        nodeIntegration: true,
        contextIsolation: false,
      }
    })
    setWindow.loadFile('set.html')
  })
}

app.whenReady().then(() => {
  createWindow()

  ipcEvent()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
