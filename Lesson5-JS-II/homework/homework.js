// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (arguments.length > 1) {
  var product = 1;
  for (let i in arguments) {
product *= arguments[i];
  }
  return product;
  }
  else if (arguments.length === 1) {
  return arguments[0];
  }
  return 0;
}

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return x > y ? x : y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch(language) {
  case 'German':
  return 'Guten Tag!';
  case 'Mandarin':
  return 'Ni Hao!';
  case 'Spanish':
  return 'Hola!';
  default:
  return 'Hello!';
  }

}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  return num > 20 && num < 50;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num === Math.floor(num);
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0) {
  if (num % 5 === 0) {
  return 'fizzbuzz';
  }
  return 'fizz';
  }
  else if (num % 5 === 0) {
  return 'buzz';
  }
  return num;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) {
  return false;
  }

  for (let i = 2; i <= num/2; i++) {
  if (num % i ===0) {
  return false;
  }
  }
  return true;
}



// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
