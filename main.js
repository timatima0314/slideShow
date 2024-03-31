const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron");
const path = require("path");

const electronReload = require("electron-reload");
require("electron-reload")(__dirname, {
  electron: require("${__dirname}/../../node_modules/electron"),
});
const createWindow = () => {
  const win = new BrowserWindow({
    width: 540,
    height: 960,
    title: "マイアプリ",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });
  win.webContents.openDevTools({ mode: "detach" });
  win.loadFile("index.html");
  globalShortcut.register("CommandOrControl+Down", () => {
    console.log("down");
    win.webContents.send("down");
  });
};

app.whenReady().then(async () => {});

app.once("ready", () => {
  createWindow();
});

app.once("window-all-closed", () => app.quit());
