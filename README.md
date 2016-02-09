![lodash](http://justinhelmer.github.io/lodash.github.io/images/logo.png)

------

The lodash website.

### Download releases, build, test, deploy

> Deploy not yet implemented

```bash
$ npm run grm release
```

### Display the contents of the manual

```bash
$ npm run grm help
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

### Passing arguments to grm

When using [npm-run-script](https://docs.npmjs.com/cli/run-script), like in the examples above, arguments after the `--` are passed to `grm`. For example:
 
```bash
# download & store releases and be extra noisy
$ npm run grm download -- --keep releases --verbose 2
```
