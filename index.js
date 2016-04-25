'use strict';

var randomNatural = require('random-natural');

var MIN = 1;
var MAX = 7;

var weekdays = [
  { name: 'Monday', short: 'MON', number: 1 },
  { name: 'Tuesday', short: 'TUE', number: 2 },
  { name: 'Wednesday', short: 'WED', number: 3 },
  { name: 'Thursday', short: 'THU', number: 4 },
  { name: 'Friday', short: 'FRI', number: 5 },
  { name: 'Saturday', short: 'SAT', number: 6 },
  { name: 'Sunday', short: 'SUN', number: 7 }
];


module.exports = function (options) {

  options = options || {};

  if (options.workaday) {
    MAX = 5;
  }

  var min = options.min ? randomNatural.fixme(options.min, MIN, MAX, true) : MIN;
  var max = options.max ? randomNatural.fixme(options.max, MIN, MAX, false) : MAX;

  var index = randomNatural({
      min: min,
      max: max,
      inspected: true
    }) - 1;

  var weekday = weekdays[index];

  return options.raw ? weekday : weekday.number;
};
