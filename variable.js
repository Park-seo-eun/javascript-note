// strict 모드로 개발할 수 있게 도와줘 상식적으로 다룰 수 있게 해준다.
// typescript 사용 시, 선언할 필요 없음
'use strict';
// 1. variable , rw(read,write) : 메모리에 읽고, 쓰기 가능
// let ( es6에 추가 ) -> 변수 선언에 사용
// 변경 가능한 변수 선언
// var hoisting : 선언된 변수를 위로 끌어 올려서 사용 가능
{
    let name = 'seoeun';
    //console.log(name);
    name = 'seoeun2';
    //console.log(name);
}
 
// 2. constant , r (read) : 메모리에서 읽기만 가능 (다른 값으로 쓰기 불가능)
// 변경 불가능한 변수 선언
// 변수가 꼭 바뀌어야할 필요 없으면 const로 쓰는 것이 바람직
const i = 1;

// 3. variable type (변수 타입)
// primitive , single item : number,string,boolean, null undefined,symbol
// object , box container
// function, first-class function
// primitive와 object에 따라 메모리에 다르게 값이 저장
// 자바스크립트에서는 변수의 타입이 다이나믹하게 할당된다.

// note!! 
// Immutablea(불변) vs. Mutable(변)
// mutable한 객체, immutable한 객체는 메모리가 참조중인 값이 직접 '변경'되는지, 새로운 참조값이 할당되는지를 기준으로 구분
// immutable(원시타입) : 데이터 자체를 바꿀 수 없음 primitive type, frozen object
// -> primitive 의 경우, 특정한 문자열을 정의하면 그 문자열을 통째로 메모리를 올린 후 다른 
// 문자열로 변경이 가능하지만 문자열의 일부를 다른 것으로 변경하거나 데이터 자체를 변경하는 것은 불가능
// mutable(참조타입) : object,array,function

// 1) string
const name = 'seoeun';
const greeting = 'hello '+ name;
//console.log(`${greeting}`);
//console.log(`value: ${greeting}, type: ${typeof greeting}`);
const hellobob = `hi ${name}!`;
console.log(`value: ${hellobob}, type: ${typeof hellobob}`);
console.log('value: ' + hellobob + 'type: '+ typeof hellobob);
// templete literals (string)
// ``(베틱/따옴표X) 이용해서 ${} 안에 삽입하면 string을 이어 붙일 수 있다.

// 2) boolean
// false : 0, null, undefined ( ), nan, ''
// ture : 다른 값

// null : 명확하게 비워있는 상태
// undefined : 선언은 되엉 있지만, 값이 지정되어 있지 않은 것

// 3) symbol
// 고유한 식별자
// 동일한 string으로 작성하여도 다른 값으로 취급
// 주어진 strind에 대해 고유한 식별자 (symbol)를 부여하는 것
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id'); 
// 동일한 string에 대해 다른 값으로 취급
console.log(symbol1===symbol2); // false

// for메소드를 사용해서 같은 symbol을 만들 수 있음
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); // true

// Symbol 출력 하기위해 .description필요
console.log(`value: ${symbol1.description},type: ${typeof symbol1 }`)

// 4. 동적 타이핑 - 타입을 미리 지정할 필요 없음
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value : ${text}, type : ${typeof text}`); // string

text = 1;
console.log(`value : ${text}, type : ${typeof text}`); // number

text = '7'+ 5 ;
console.log(`value : ${text}, type : ${typeof text}`); // string

text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`); // number