#!/usr/bin/env node

const os = require('os');
const path = require('path');
const fs = require('fs');

const isGlobalInstall = process.env.npm_config_global;

if (isGlobalInstall) {
  console.log('Please do not install spotlight-noindex globally.')
  process.exit(1);
}

// Only care about macOS
if (os.platform() === 'darwin') {
  const filePath = path.resolve(__dirname, '../.metadata_never_index');

  fs.open(filePath, 'w', (error, fd) => {
    if (!error) {
      fs.close(fd);
      process.exit(0);
    }
  });

}
