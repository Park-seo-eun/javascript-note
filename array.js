'use strict';

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana'];
// 3. looping over an array
// print all fruit

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
// c. foreach
