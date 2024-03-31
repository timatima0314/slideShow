const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  downSlide: (callback) =>
    ipcRenderer.on("down", (_event, value) => callback(value)),
  upSlide: (callback) =>
    ipcRenderer.on("up", (_event, value) => callback(value)),
});
