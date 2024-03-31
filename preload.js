const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  downSlide: (callback) =>
    ipcRenderer.on("down", (_event, value) => callback(value)),
});
