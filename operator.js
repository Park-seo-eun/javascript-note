// 1. string 이어 붙이기
console.log('my'+'cat');
console.log('1'+2); //12 type:string
console.log(`string literals: 1 + 2 = $ {1+2}`)

// 6. 논리 연산자 : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||연산자는 앞에서 부터 보다가 true가 나오면 뒤에 연산은 수행하지 않음
// ## 따라서 연산해야 하는 양이 많은 것은 맨 뒤로 배치
console.log (`or : ${value1 || value2 || check()}`);

// &&연산자는 앞에서 부터 보다가 false가 나오면 뒤에 연산은 수행하지 않음
// ## 무거운 연산은 뒤에 배치
console.log (`and : ${value1 && value2 && check()}`);

function check() {
    for (let i=0;i<10;i++) {
        console.log('wait');
    }
    return true;
}

// nullableobject && nullableobject.something
// nullableobject이 null이면 뒤에 문장은 전혀 실행햐지 않기 때문에 null 체크로 사용하기 편하다
// 같은 코드 
//if (nullableobject != null) {
//  nullableobject.something;
//}

// 7. equality
// == : 타입은 비교하지 않고, 값만 비교
// === : 타입까지 비교

// 헷갈리기 쉬운 비교
console.log(0==false); // true
console.log(0===false); // 0은 boolean타입이 아님 / false
console.log(''==false); // true
console.log(''===false); // false
console.log(null==undefined); // true
console.log(null===undefined); // false

// break ,continue
// break : loop 자체를 중단
// continue : 현재 loop만 중단하고 다른 loop실행

// quiz1 : 짝수만 더하기
let count = 0;

for(let i=0;i<11;i++) {
    if (( i % 2 !== 0)) {
        continue;
    }
    else {
        count+=i
    }
}

console.log(`total : ${count}`);

// quiz2 : 8까지만 더하기

for(let i=0;i<11;i++) {
    if (i>8) {
        break;
    }
}


