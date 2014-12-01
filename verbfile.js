'use strict';

var verb = require('verb');

verb.helper('year', require('./'));

verb.task('default', function() {
  verb.src('.verb.md')
    .pipe(verb.dest('./'));
});
