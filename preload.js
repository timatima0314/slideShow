const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  butotnClick: (callback) =>
    ipcRenderer.on("butotn-click", (_event, value) => callback(value)),
});
