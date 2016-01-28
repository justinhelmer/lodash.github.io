(function() {
  'use strict';

  var program = require('commander');
  var fork = require('./fork');

  function jekyll(args, options) {
    options = options || {};

    fork('jekyll', args, options);
  }

  module.exports = jekyll;
})();
