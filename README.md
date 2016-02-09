![lodash](http://justinhelmer.github.io/lodash.github.io/images/logo.png)

------

The lodash website.

[![build status](https://travis-ci.org/justinhelmer/lodash.github.io.svg?branch=master)](https://travis-ci.org/justinhelmer/lodash.github.io/)
[![coverage status](https://coveralls.io/repos/github/justinhelmer/lodash.github.io/badge.svg?branch=master)](https://coveralls.io/github/justinhelmer/lodash.github.io?branch=master)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lodash/lodash.github.io/issues)
[![devDependency status](https://david-dm.org/justinhelmer/lodash.github.io/dev-status.svg)](https://github.com/justinhelmer/lodash.github.io)

## Installation

This is a _private_ module and thus is not published to the `npm` registry. To install locally:

```bash
$ git clone https://github.com/justinhelmer/lodash.github.io
$ cd lodash.github.io
$ npm install
```

## Usage

**Simple.**

### Download releases, build, test, deploy

> Deploy not yet implemented

```bash
$ npm run grm release
```

### Download releases, build, test, launch development server

```bash
$ npm start
```

### Download releases, build, test

> --dry-run not yet implemented

```bash
$ npm run grm release --dry-run
```

### launch development server

```bash
$ npm run grm serve
```

### Display the contents of the manual

```bash
$ npm run grm help
```

### Passing arguments to grm

When using [npm-run-script](https://docs.npmjs.com/cli/run-script), like in the examples above, arguments after the `--` are passed to `grm`. For example:
 
```bash
# download & store releases and be extra noisy
$ npm run grm download -- --keep releases --verbose 2
```

## Contributions

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lodash/lodash.github.io/issues)
[![devDependency status](https://david-dm.org/justinhelmer/lodash.github.io/dev-status.svg)](https://github.com/justinhelmer/lodash.github.io)

## More help

See the [GitHub Release Manager](https://github.com/justinhelmer/gh-release-manager) docs.
