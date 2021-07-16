// 1. function
// java script에서 function은 object
// -> 변수에 할당, 파라미터에 전달, return 가능
//
// 3. default parameters
function ShowMessage (message,from) {
    console.log(`${message} by ${from}`);
}
ShowMessage('hi'); // hi by undefined // 파라미터 하나만 넣어줌

function ShowMessage2 (message, from = 'unknown') { // default값 지정 
    console.log(`${message} by ${from}`);
}
ShowMessage2('hi'); // hi by unknown // 파라미터 없는 경우 default값으로 대체

// 4. rest parameters
// ...파라미터 : 배열 형태로 파라미터 전달
function printAll (...args) {
    for (let i =0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg));
}
    
printAll('one','two','three');

// 7. early return, early exit
// bad
function upgradeUser(user) {
    if (user.point >10) {
        // long upgrade logic
    }
}

// good
function upgradeUser2(user) {
    if (user.point <= 10) { // 아닌 경우 먼저 return(함수 종료)
        return;
    }
    // long upgrade logic
}

// 8. 함수 표현식
// function 키워드는 어떤 표현식 내에서 함수를 정의하는 데 사용될 수 있다
const print = function() { // 함수를 선언함과 동시에 변수에 할당할 수 있다
    console.log('print'); // 함수 이름이 없는 경우 -> 익명 함수
}

print(); // 함수 호출과 똑같이 호출
const printAgain = print;
printAgain();

// 함수 표현식과 함수 선언(function declaration) 의 차이점
// 함수 선언의 경우 hoisting이 된다. -> 함수 선언 이전에 호출되어도 자바 스크립트 엔진이 선언문을 제일 위에 올린다.

// 9. callback : callback function 함수를 전달하는 것
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes()
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  }
  
  // named function
  // 디버깅시, stack traces에 이름이 나오도록 허거나 재귀함수를 사용할때 named function 사용
  const printNo = function print() {
    console.log('No!');
  }
  
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);

  // 10. 화살표 함수 : 항상 익명 함수
const simplePrint = function () {
    console.log('simplePrint');
}

const simplePrint2 = ()=> console.log('simplePrint!');
const add = (a,b) => a + b;
simplePrint2();
add(2,3);
// 여러 줄의 코드를 화살표 함수에 넣을때 {} 을 이용하여 삽입 가능
// 단, return 키워드를 이용해야 한다.

// 11. IIFE : Immediatly Invoked Function Expression
// 선언함과 동시에 호출
(function hello() {
    console.log('HI');
  })();

  