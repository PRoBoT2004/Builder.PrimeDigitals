// src/utils/chromeLauncher.js
export const launchChromeWithDebugging = () => {
  const instructions = {
    windows: '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --remote-debugging-port=9222 --user-data-dir=C:\\temp\\chrome-debug',
    mac: '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug',
    linux: 'google-chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug'
  };

  const platform = navigator.platform.toLowerCase();
  let command = instructions.linux; // default

  if (platform.includes('win')) {
    command = instructions.windows;
  } else if (platform.includes('mac')) {
    command = instructions.mac;
  }

  return {
    command,
    instructions: `
To enable PDF export, please:

1. Close all Chrome windows
2. Open terminal/command prompt
3. Run this command:
   ${command}
4. A new Chrome window will open
5. Return to this page and try exporting again

Note: This Chrome instance is for debugging only.
    `
  };
};