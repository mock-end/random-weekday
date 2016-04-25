var expect = require('chai').expect;

describe('random-weekday: ', function () {

  var randomWeekday = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      expect(randomWeekday()).to.be.within(1, 7);

      expect(randomWeekday({ min: 4 })).to.be.within(4, 7);
      expect(randomWeekday({ max: 5 })).to.be.within(1, 5);

      expect(randomWeekday({ workaday: true })).to.be.within(1, 5);
      expect(randomWeekday({
        raw: true,
        min: 1,
        max: 1
      })).to.be.eql({
        name: 'Monday',
        short: 'MON',
        number: 1
      });
    }

  });

});
