//#2
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(value) {
    if (value < 0) {
      console.log("width not defined");
    }
    this.#width = value;
  }
  get width() {
    return this.#width;
  }

  set height(value) {
    if (value < 0) {
      console.log("height not defined");
    }
    this.#height = value;
  }
  get height() {
    return this.#height;
  }
}

class calc extends Rectangle {
  getAround() {
    return  2*(this.width + this.height);
  }
  getArea() {
    return this.width * this.height;
  }
}

const rect = new calc;
rect.width = 10;
rect.height = 5;
console.log(`둘레는 ${rect.getAround()}, 넓이는 ${rect.getArea()}`);

//#3
class Student {
  #major;
  #stuNum;

  constructor(major, stuNum) {
    this.major = major;
    this.stuNum = stuNum;
  }

  set major(value) {
    if (!value) {
      console.log("학과를 입력하세요");
      return;
    }
    this.#major = value;
  }

  get major() {
    return this.#major
  }

  set stuNum(value) {
    if (value < 0) {
      console.log("학번을 입력하세요");
      return;
    }
    this.#stuNum = value;
  }

  get stuNum() {
    return this.#stuNum;
  }

  sayHello() {
    console.log(`나는 ${this.#major}학과 ${this.#stuNum}학번입니다.`);
  }
}

const stu = new Student("컴퓨터", 202004123);
stu.sayHello(); //** */


//#4
class Account {
  #owner;
  #balance;

 constructor(owner, balance) {
  this.#owner = owner;
  this.#balance = balance;
 }

  set owner(value) {
    if (!value) {
      console.log("owner not defined");
    }
    this.#owner = value;
  }
  get owner() {
    return this.#owner;
  }

  set balance(value) {
    if (!value) {
      console.log("balance not defined");
    }
    this.#balance = value;
  }
  get balance() {
    return this.#balance;
  }

  disposit(amount) {
    this.balance += amount;
  }

  withdraw(longAmount) {
    if ((this.balance - longAmount) >= 0) {
      this.balance -= longAmount;
    } else {
      console.log("인출 상한 금액은 잔액까지입니다.");
    }
  }
}

const acc = new Account("Hello", 15000); 
console.log("%s의 잔액은 %d원", acc.owner, acc.balance); 
acc.disposit(5000); 
console.log("%s의 잔액은 %d원", acc.owner, acc.balance); 
acc.withdraw(15000); 
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);
acc.disposit(5000); 
console.log("%s의 잔액은 %d원", acc.owner, acc.balance); 
acc.withdraw(15000); 
console.log("%s의 잔액은 %d원", acc.owner, acc.balance);