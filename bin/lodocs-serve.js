#!/usr/bin/env node
(function() {
  'use strict';

  var _ = require('lodash');
  //var open = require('opn');
  var program = require('commander');
  var fork = require('../lib/fork');

  program
      .option('-q, --quiet', 'output nothing (suppress STDOUT and STDERR)')
      .option('-v, --verbose', 'output additional information; takes precedence over `-q')
      .option('-o, --open <n>', 'launch the site in a browser `n` seconds after it begins being served')
      .parse(process.argv);

  var port = program.args[0] || '4000';
  var args = ['serve', '--port', port];
  require('../lib/jekyll-args')(args);

  if (program.open) {
    setTimeout(function() {
      open('http://localhost:' + port);
    }, program.open * 1000);
  }

  fork('jekyll', args);

  require('../lib/exit')();
})();

