#!/usr/bin/env node

"use strict";

const os = require('os');
const path = require('path');
const fs = require('fs');

if (process.env.npm_config_global) {
  console.error('spotlight-noindex is not meant to be installed globally.')
  process.exit(1);
}

if (process.env.npm_lifecycle_event !== 'postinstall') {
  console.error('spotlight-noindex is not meant to be run from the commandline.')
  process.exit(2);
}

// Only care about macOS
if (os.platform() === 'darwin') {
  const filePath = path.resolve(__dirname, '../.metadata_never_index');

  fs.open(filePath, 'w', (error, fd) => {
    if (!error) {
      fs.closeSync(fd);
      process.exit(0);
    }
  });

}
