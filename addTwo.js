// non-tape tests

console.log('passing in 2 should return 4: ', addTwo(2) === 4)
console.log('passing in 4 should return 6: ', addTwo(4) === 6)

function addTwo(number){
  return number + 2;
}
