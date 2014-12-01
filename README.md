# helper-year [![NPM version](https://badge.fury.io/js/helper-year.svg)](http://badge.fury.io/js/helper-year)

> Template helper for adding the current year. Good for adding dates for licenses, copyrights, last modified date, comment dates, etc. Works with handlebars, lo-dash or any template engine that has support for helper functions.

## Install with [npm](npmjs.org)

```bash
npm i helper-year --save
```

**Examples**

```js
{%= year() %}
//=> 2014
{%= year("YYYY") %}
//=> 2014
{%= year("YY") %}
//=> 14
```

## Run tests

```bash
npm test
```

## Register the helper

> This should work with any engine, here are a few examples

### [template]

Register the helper for use with any template engine

```js
template.helper('year', require('helper-year'));
```

### [assemble]

To register the helper for use with [assemble] v0.6.x:

```js
assemble.helper('year', require('helper-year'));
```

### [verb]

Register the helper for use with [verb]:

```js
var verb = require('verb');
verb.helper('year', require('helper-year'));

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'));
});
```

### [handlebars]

```js
var handlebars = require('handlebars');
handlebars.registerHelper('year', require('helper-year'));
```

### [Lo-Dash] or [underscore]

```js
// as a mixin
_.mixin({year: require('helper-year')});
_.template('<%= _.year() %>', {});
//=> 2014

// passed on the context
_.template('<%= year() %>', {year: require('helper-year')});
//=> 2014

// as an import
var settings = {imports: {year: require('helper-year')}};
_.template('<%= year() %>', {}, settings);
//=> 2014
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/helper-year/issues)

To request or contribute a helper to the [github.com/helpers][helpers] org, please read [this contributing guide][guide] to get started.

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 01, 2014._

[assemble]: https://github.com/assemble/assemble
[generator-verb]: https://github.com/assemble/generator-verb
[handlebars-helpers]: https://github.com/assemble/handlebars-helpers/
[handlebars]: https://github.com/wycats/handlebars.js/
[helpers]: https://github.com/helpers
[Lo-Dash]: https://lodash.com/
[template]: https://github.com/jonschlinkert/template
[underscore]: https://github.com/jashkenas/underscore
[verb]: https://github.com/assemble/verb
[guide]: https://github.com/helpers/requests