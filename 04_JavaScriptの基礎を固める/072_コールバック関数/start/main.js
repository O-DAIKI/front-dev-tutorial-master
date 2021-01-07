// function hello(callback, lastname) {
//   console.log(callback)
//   console.log('hello ' + callback(lastname));
// }

// function getName() {
//   return 'Code Mafia';
// }

// const getFirstName = function () {
//   return 'Code';
// }

// hello(function (name) {
//   return 'Code' + name;
// }, 'Mafia');

function dosomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

dosomething(2, 3, multiply);