var test = require('tape').test;
var subtract = require('../subtract')

test('The subtract method', function(t){
  var actual = subtract(10,2);
  var expected = 8;
  t.equal(actual, expected, 'should subtract one number from another.');
  t.end();
})
