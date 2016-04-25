# random-weekday

> Generate a random weekday.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-weekday/blob/master/LICENSE)
  
[![build:?](https://img.shields.io/travis/mock-end/random-weekday/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-weekday)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-weekday/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-weekday)
  
  
## Install
  
```
$ npm install --save random-weekday 
```
  
## Usage
  
```js
var randomWeekday = require('random-weekday');
  
// API
// - randomWeekday([options]);
  
// options
// - workaday
// - raw
// - min
// - max
```

By default, returns just the weekday number from `1` to `7`: 

```js
randomWeekday();
// => 5
```

Optionally specify raw to get the whole weekday object:

```js
randomWeekday({ raw: true });
// => { name: 'Tuesday', short: 'TUE', number: 2 }
```

Optionally specify min, max, or both to limit the range.

```js
randomWeekday({ min: 2 });
// => 4

randomWeekday({ max: 5 });
// => 3

randomWeekday({ min: 2, max: 5 });
// => 5
```

## Related

- [random-year](https://github.com/mock-end/random-year) - Generate a random year.
- [random-month](https://github.com/mock-end/random-month) - Generate a random month.
- [random-day](https://github.com/mock-end/random-day) - Generate a random day of a month.
- [random-hour](https://github.com/mock-end/random-hour) - Generate a random hour.
- [random-minute](https://github.com/mock-end/random-minute) - Generate a random minute.
- [random-second](https://github.com/mock-end/random-second) - Generate a random second.
- [random-millisecond](https://github.com/mock-end/random-millisecond) - Generate a random millisecond.
- [random-datetime](https://github.com/mock-end/random-datetime) - Generate a random date. 
- [random-ampm](https://github.com/mock-end/random-ampm) - Return am or pm. Very simple.
- [random-timestamps](https://github.com/mock-end/random-timestamps) - Generate a timestamp. 
- [random-hammertime](https://github.com/mock-end/random-datetime) - Generate a random hammertime. 

  
## Contributing
  
Pull requests and stars are highly welcome.
  
For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-weekday/issues/new).
