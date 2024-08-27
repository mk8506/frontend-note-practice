//#1
class Student {
  #korean;
  #english;
  #math;

  constructor(korean, english, math) {
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
  set korean(value) {  
    if (value < 0) {
      console.log("점수를 입력하세요");
      return;
    }
    this.#korean = value;
  }

  get korean() {
    return this.#korean;
  }

  set english(value) {  
    if (value < 0) {
      console.log("점수를 입력하세요");
      return;
    }
    this.#english = value;
  }

  get english() {
    return this.#english;
  }

  set math(value) {  
    if (value < 0) {
      console.log("점수를 입력하세요");
      return;
    }
    this.#math = value;
  }

  get math() {
    return this.#math;
  }

  sum() {
    return (this.korean + this.english + this.math);
  }
  
  avg(sum) {
    return sum / 3;
  }
}

const Cheol = new Student(91, 81, 77);
console.log("Cheol sum: " + Cheol.sum());
console.log("Cheol avg: " + Cheol.avg(Cheol.sum()));

const Young = new Student(72, 95, 98);
console.log("Young sum: " + Young.sum());
console.log("Young avg: " + Young.avg(Young.sum()));

const Min = new Student(80, 86, 84);
console.log("Min sum: " + Min.sum());
console.log("Min avg: " + Min.avg(Min.sum()));
