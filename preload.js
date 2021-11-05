const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	ipcRenderer: {
		chooseDir(...args) {
			ipcRenderer.send('chooseDir', ...args)
		}
	}
});