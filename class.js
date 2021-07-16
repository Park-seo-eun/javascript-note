'use strict';
// * getter, setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // 객체 지향의 관점에서 나이가 -1이 되는 것은 말이 안됨
  // 그래서 setter를 사용해서 값을 지정할 수 있는 범위를 미리 정해줌
  // const user1 = new user ('p','seoeun',-1)

  //age getter를 정의하는 순간, 위의 this.age는 메모리의 데이터를 읽어오는게 아닌
  //getter를 호출하게 된다.

  //getter
  get age() {
    return this._age;
  }
  // age setter를 정의하는 순간 this.age = age에서 값을 할당할 때
  // setter를 호출하게 된다.
  // 즉, setter 안에서 전달된 value를 this.age에 할당하는게 아니라 또 다시
  // setter를 호출하게 된다. 그 결과 setter는 무한 반복 -> call stack이 넘치게 된다.

  // 이를 방지하기 이해 getter와  setter안에서 사용되는 변수 명을 다르게 해야한다. 속성은 _age이지만,
  // .age에 값을 할당할 수 있는 이유는 내부적으로 getter와 setter가 있기 때문

  //setter
  set age(value) {
    if (value < 0) {
      // 잘못된 값 방지, 삼항 연산자로도 방지 가능
      throw Error('age can not be negative');
    }
    this._age = value;
  }
}

const user1 = new User('Steve', 'Job', -1); // 오류 발생
// .age에 값을 할당할 수 있는 이유는 내부적으로 getter와 setter가 있기 때문
console.log(user1.age);

// * Publice & Private
// 최근에 추가된 개념
// 생성자를 사용하지 않고 field를 정의 가능
// 바로 정의하면 public, #을 붙이면 private
// private은 class 내부에서만 값이 보여지고, 접근&변경 가능

class Experience {
  publicField = 2;
  privateField = 2;
}

const experience = new Experience();
console.log(experience.publicField); //2
console.log(experience.privateField); // undefined

// * 상속과 다향성
