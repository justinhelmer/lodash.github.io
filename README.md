![lodash](http://justinhelmer.github.io/lodash.github.io/images/logo.png)

------

The lodash website.

### fully-automated setup

> Only works for `OSX`. Assumes `npm` exists

```bash
$ npm install && node node_modules/.bin/lodocs install
```

### manual setup

1. Install [Ruby](https://www.ruby-lang.org/en/) `2.1.4`
2. Install [Node](https://www.npmjs.com/) >= `0.12.x`
3. Install project dependencies:

```bash
$ npm install
$ cd ./node_modules/lodocs && bundle
```

### launch

```bash
$ npm start
```

**NOTE:** There is currently an unknown issue with `gulp-jscs` if you are using `Ubuntu`. Adding `jscs()` to the `pipe()` in the `lodocs` `gulpfile.js` seems to cause issues.

### update $PATH (optional)

```bash
$ npm run link-lodocs
```

### build/serve/etc.

```bash
$ lodocs # will display man page
```
