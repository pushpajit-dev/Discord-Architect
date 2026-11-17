import { app, BrowserWindow, shell } from 'electron';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const mainDir = dirname(fileURLToPath(import.meta.url));

// Use writable userData directory for SQLite DB & .env in packaged .exe
const userDataDir = app.getPath('userData');
process.env.DATA_DIR = join(userDataDir, 'data');

const userEnvPath = join(userDataDir, '.env');
const devEnvPath = resolve(mainDir, '../../bot/.env');
if (existsSync(userEnvPath)) {
  dotenv.config({ path: userEnvPath });
} else if (existsSync(devEnvPath)) {
  dotenv.config({ path: devEnvPath });
}

let mainWindow: BrowserWindow | null = null;

async function createWindow() {
  // Dynamically import after DATA_DIR & env are configured
  const { startBotAndApi } = await import('@discord-architect/bot');
  startBotAndApi(3001);

  mainWindow = new BrowserWindow({
    width: 1360,
    height: 860,
    minWidth: 960,
    minHeight: 640,
    title: 'Discord Architect — Server-as-Code Builder',
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // Open external links (e.g. Discord OAuth2 invite URLs) in the user's default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  const webDistIndex = resolve(mainDir, '../web-dist/index.html');
  await mainWindow.loadFile(webDistIndex);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
