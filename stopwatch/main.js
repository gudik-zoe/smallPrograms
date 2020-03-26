const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 330,
    height: 210,
    frame: false,
    transparent: true,
    resizable: false,
    center: true,
    thickFrame: false,
    movable: true,
    autoHideMenuBar: true,
    x: 1000,
    y: 70,
    webPreferences: {
      devTools: false
    }
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
