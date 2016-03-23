# installed-local-modules

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Retrieve all of project's local installed modules.


## Install

```
$ npm install installed-local-modules
```


## Usage

```js
var installedLocalModules = require('installed-local-modules');

installedLocalModules()
  .then(res => console.log(res));
//=>
// [
//   'chai',
//   'assertion-error',
//   'deep-eql',
//   'type-detect',
//   'type-detect',
// ...
// ]
```


## API

### installedLocalModules()


## License

MIT © [C.T. Lin](https://github.com/chentsulin/installed-local-modules)

[npm-image]: https://badge.fury.io/js/installed-local-modules.svg
[npm-url]: https://npmjs.org/package/installed-local-modules
[travis-image]: https://travis-ci.org/chentsulin/installed-local-modules.svg
[travis-url]: https://travis-ci.org/chentsulin/installed-local-modules
[coveralls-image]: https://coveralls.io/repos/chentsulin/installed-local-modules/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/installed-local-modules?branch=master
[david_img]: https://david-dm.org/chentsulin/installed-local-modules.svg
[david_site]: https://david-dm.org/chentsulin/installed-local-modules

