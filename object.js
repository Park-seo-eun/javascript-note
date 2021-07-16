// object
// 자바스크립트 타입 중 하나
// object = {key : value} // 키와 값의 집합

//1. 객체 생성 방법
const ob1 = {};
const ob2 = new Object();

const seo = { name: 'seo', age: 4 }; // 객체 생성

//2. 객체에 있는 데이터 접근 방법
// computed properties : .key 이름 말고 ['string'] 방식으로 불러오는 것
console.log(seo.name); // .name으로 접근
console.log(seo['name']); // object에 있는 변수를 string으로 접근 가능
// **주의 : 키는 string 타입으로 불러와야 한다.
console.log(seo);

seo.hasjob = true; //객체 속성은 중간에 추가 가능
seo['hasjob2'] = false; // [''] 방식으로 값 지정도 가능

console.log(seo.hasjob);
console.log(seo.hasjob2);

// 각각 사용하는 경우
// 1) dot을 사용하는 경우
// : 코딩하는 순간 key의 값을 가져오고 싶을 때
// 2) computed properties를 사용하는 경우
// : 정확히 어떤 키가 필요한지 모를 때 - runtime에서 결정될 때

// Computed properties를 사용해야할 때
// obj에 key라는 이름의 속성은 없다
/*
function printValue1(obj, key) {
  console.log(obj.key);
}

printValue1(obj, 'name'); // undefined
// obj에 key라는 property가 없으므로 undefined가 나온다.

function printValue2(obj, key) {
  console.log(obj[key]);
}
printValue2(obj, 'name'); //
// 정상적으로 출력된다. */

// 3. Property value shorthand
const person1 = { name: 'a', age: 20 };
const person2 = { name: 'b', age: 21 };
const person3 = { name: 'c', age: 22 };
const person4 = Person2('d', 23); // {name: "d", age: 23}
console.log(person4);
// 똑같은 키 값 반복하기 귀찮
// 함수 만들자-> object를 생성하는 함수
// 즉, 클래스(templete) 같은 역할
// 이때 key와 value의 이름이 동일하다면 생략 가능
function Person(name, age) {
  return {
    name: name,
    age: age
  };
}

function Person2(name, age) {
  return {
    name,
    age
  };
}

// 4. Constructor function
// 순수하게 object를 생성하는 함수
// 대문자로 시작하도록 함수 이름 설정

function Person3(name, age) {
  // this = {} // 새로운 object를 만들어서
  // this에 name ,age라는 새로운 속성을 넣고
  this.name = name;
  this.age = age;
  // this라는 객체를 반환
}

const person5 = new Person('e', 25);
console.log(person5);

// 5. in 연산자 : key값이 object에 있는지 확인
console.log('name' in seo); // true

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in seo) {
  console.log(key);
}
// for (value of array)
const arr = [1, 2, 3, 4, 5];
console.log(arr);
for (value of arr) {
  console.log(value);
}

// 7. object clone
const user = { name: 'eun', age: 20 };
const user2 = user; // 참조값 복사

console.log(user2);
user2.age = 40;

// user와 user2값 모두 변경된 것을 알 수 있다.
console.log(user);
console.log(user2);

// 이때 객체 자체를 복사해서 한 객체의 변경이 다른 객체의 변경에 영향을
// 안미치도록 만들기위해 복제 필요

// 1) old way
const user3 = {};
for (key in user2) {
  user3[key] = user2[key];
}

// 2) Object.assign
// window : ctrl키를 눌러서 함수를 누르면 정의 볼 수 있음
// 어떤 값을 받아서 어떤 값을 return 하는지 확인 하세여
// assign ( 복사되어질 곳 , 복사하려는 내용) -> 복사된 값 반환
const user4 = Object.assign({}, user3);
console.log(user4);

// Ex
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
// 여러 object들을 복사할때 가장 마지막 객체의 값으로 지정된다.
const mixed = Object.assign({}, fruit2, fruit1);

console.log(mixed.color);
console.log(mixed.size); //
