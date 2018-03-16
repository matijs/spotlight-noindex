# spotlight-noindex

[![Version on npm](https://img.shields.io/npm/v/spotlight-noindex.svg)](https://npmjs.com/package/spotlight-noindex)

Prevents Spotlight on macOS from indexing your `node_modules` directory.

## Installation

It's recommended to add spotlight-noindex to your project as a development dependency.

**important**: Do not install spotlight-noindex globally.

```bash
$ npm install --save-dev spotlight-noindex
```

## Usage

Upon installation, spotlight-noindex will create an empty file `.metadata_never_index` inside your `node_modules` directory. The presence of this file prevents Spotlight from indexing the directory.

## License

MIT © Matijs Brinkhuis
