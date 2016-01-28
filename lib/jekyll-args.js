(function() {
  'use strict';

  var _ = require('lodash');
  var path = require('path');
  var program = require('commander');

  function jekyllArgs(args) {
    args.push('--config', path.resolve(__dirname, '../_config.yml'));

    if (program.verbose && !program.quiet) {
      args.push('--verbose');
    }
  }

  module.exports = jekyllArgs;
})();
