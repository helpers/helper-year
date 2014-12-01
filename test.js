/**
 * helper-year <https://github.com/jonschlinkert/helper-year>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var handlebars = require('handlebars');
var _ = require('lodash');
var year = require('./');

describe('year helper', function () {
  var links = year();
  it('should return the current year:', function() {
    year().should.equal('2014');
  });

  it('should return the 2-digit current year when YY is passed:', function() {
    year('YY').should.equal('14');
  });

  it('should return the 4-digit current year when YYYY is passed:', function() {
    year('YYYY').should.equal('2014');
  });

  it('should return the 4-digit current year when yyyy is passed:', function() {
    year('yyyy').should.equal('2014');
  });

  it('should work as a lodash helper:', function () {
    _.template('<%= year() %>', {}, {imports: {year: year}}).should.eql(year());
    _.template('<%= year("yy") %>', {}, {imports: {year: year}}).should.eql(year("yy"));
  });

  it('should work as a lodash mixin:', function () {
    _.mixin({year: year});
    _.template('<%= _.year() %>', {}).should.eql(year());
    _.template('<%= _.year("yy") %>', {}).should.eql(year("yy"));
  });

  it('should work as a handlebars helper:', function () {
    handlebars.registerHelper('year', year);
    handlebars.compile('{{year}}')().should.eql(year());
    handlebars.compile('{{year "yy"}}')().should.eql(year("yy"));
  });
});
