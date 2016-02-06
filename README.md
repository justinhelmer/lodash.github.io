![lodash](http://justinhelmer.github.io/lodash.github.io/images/logo.png)

------

The lodash website.

### Fully-automated setup

> Only works for `OSX`. Assumes `node` & `npm` are installed.

```bash
$ npm install && node node_modules/.bin/lodocs install
```

### Manual setup

1. Install [Ruby](https://www.ruby-lang.org/en/) `2.1.4` (used for [Jeyll](https://jekyllrb.com/) static site generation).
2. Install [Node](https://www.npmjs.com/) >= `0.12.x` (for everything else).
3. Install project dependencies:

```bash
$ npm install
$ cd ./node_modules/lodocs && bundle
```

### Launch

```bash
$ npm start
```

### Build / serve / etc.

```bash
$ npm run lodocs # will display man page
```
