var test = require('tape').test;
var add = require('../add');
// var subtract = require('../subtract')

test('The add method', function(t){
  var actual = add(1,2);
  var expected = 3;
  t.equal(actual, expected, 'should add two numbers correctly.');
  t.end();
});
