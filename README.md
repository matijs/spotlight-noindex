# spotlight-noindex

Prevents Spotlight on macOS from indexing your `node_modules` directory.

## Installation

```bash
$ npm install --save-dev spotlight-noindex
```

## Usage

Upon installation, spotlight-noindex will create an empty file `.metadata_never_index` inside your `node_modules` directory. The presence of this file prevents Spotlight from indexing the directory.

## License

MIT © Matijs Brinkhuis
