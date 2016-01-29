#!/usr/bin/env node
(function() {
  'use strict';

  var _ = require('lodash');
  var program = require('commander');
  var fork = require('../lib/fork');
  var open = require('../lib/open');

  program
      .option('-q, --quiet', 'output nothing (suppress STDOUT and STDERR)')
      .option('-v, --verbose', 'output additional information; takes precedence over `-q')
      .option('-o, --open <n>', 'launch the site in a browser `n` seconds after it begins being served')
      .parse(process.argv);

  var port = program.args[0] || '4000';
  var args = ['serve', '--port', port];

  if (program.open) {
    open(program.open, '', port);
  }

  if (program.verbose && !program.quiet) {
    args.push('--verbose');
  }

  fork('jekyll', args);

  require('../lib/exit')();
})();

