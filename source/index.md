---
title: Lodash
---

A modern JavaScript utility library delivering modularity, performance, & extras.

```js
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { 'a': 1, 'b': 2, 'c': 3 }
_.map([1, 2, 3], function(n) { return n * 3; });
// → [3, 6, 9]
```

## Download

Lodash is released under the [MIT license](https://raw.githubusercontent.com/lodash/lodash/4.5.1/LICENSE) & supports [modern environments](https://lodash.com/#support).
Review the [build differences](https://github.com/lodash/lodash/wiki/build-differences) & pick one that’s right for you.

- [Core build](https://raw.githubusercontent.com/lodash/lodash/4.5.1/dist/lodash.core.js) ([~4 kB gzipped](https://raw.githubusercontent.com/lodash/lodash/4.5.1/dist/lodash.core.min.js))
- [Full build](https://raw.githubusercontent.com/lodash/lodash/4.5.1/dist/lodash.js) ([~21 kB gzipped](https://raw.githubusercontent.com/lodash/lodash/4.5.1/dist/lodash.min.js))
- [CDN copies](https://www.jsdelivr.com/projects/lodash)

## Installation

In a browser:

```js
<script src="lodash.js"></script>
```

Using npm:

```bash
$ {sudo -H} npm i -g npm
$ npm i --save lodash
```

In Node.js:

```js
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the fp build for immutable auto-curried iteratee-first data-last methods.
var _ = require('lodash/fp');

// Load a method category.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
var chunk = require('lodash/chunk');
var extend = require('lodash/fp/extend');
```

## Why Lodash?

Lodash makes JavaScript easier by taking the hassle out of working with arrays,
numbers, objects, strings, etc. Lodash’s modular methods are great for:

- Iterating arrays, objects, & strings
- Manipulating & testing values
- Creating composite functions

## Module Formats

Lodash is available in a [variety of builds](https://lodash.com/custom-builds) & module formats.

- [lodash](https://www.npmjs.com/package/lodash) & [per method packages](https://www.npmjs.com/browse/keyword/lodash-modularized)
- [lodash-amd](https://www.npmjs.com/package/lodash-amd)
- [lodash-es](https://www.npmjs.com/package/lodash-es) & [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash)
- [lodash/fp](https://github.com/lodash/lodash/tree/4.5.1-npm/fp)

## Further Reading

- [Contributing](https://github.com/lodash/lodash/blob/4.5.1/.github/CONTRIBUTING.md)
- [Release Notes](https://github.com/lodash/lodash/releases/tag/4.0.0)
- [Wiki (Changelog, Roadmap, etc.)](https://github.com/lodash/lodash/wiki)

## Support

Tested in Chrome 47-48, Firefox 43-44, IE 9-11, Edge 13, Safari 8-9, Node.js 0.10, 0.12, 4, & 5, & PhantomJS 1.9.8.

Automated [browser](https://saucelabs.com/u/lodash) & [CI](https://travis-ci.org/lodash/) test runs are available.
