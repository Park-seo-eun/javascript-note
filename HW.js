function calculater(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'divide':
      return a / b;
    default:
      throw Error('모르는 command 입니다');
  }
}

console.log(calculater('add', 1, 2));
