/*!
 * helper-year <https://github.com/jonschlinkert/helper-year>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var year = require('year');

module.exports = function() {
  return year.apply(year, arguments);
};
