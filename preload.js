const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	ipcRenderer: {
		chooseDir() {
			ipcRenderer.send('chooseDir')
		}
	}
});