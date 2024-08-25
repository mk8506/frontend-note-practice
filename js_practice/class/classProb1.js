//#1
class Student {
  #korean;
  #english;
  #math;

  constructor(korean, english, math) {
    this.setKorean = korean;
    this.setEnglish = english;
    this.setMath = math;
  }

  setKorean(value) {  
    if (value < 0) {
      console.log("점수를 입력하세요");
      return;
    }
    this.#korean = value;
  }

  getKorean() {
    return this.#korean;
  }

  setEnglish(value) {  
    if (value < 0) {
      console.log("점수를 입력하세요");
      return;
    }
    this.#english = value;
  }

  getEnglish() {
    return this.#english;
  }

  setMath(value) {  
    if (value < 0) {
      console.log("점수를 입력하세요");
      return;
    }
    this.#math = value;
  }

  getMath() {
    return this.#math;
  }

  sum() {
    let total = 0;
    total += this.getKorean();
    total += this.getEnglish();
    total += this.getMath();
    return total;
  }
  
  avg(sum) {
    const avg = sum / 3;
    return avg;
  }
}

const Cheol = new Student(91, 81, 77);
const sumRe = Cheol.sum(); //???
console.log("Cheol sum: " + sumRe);
console.log("Cheol avg: " + Cheol.avg(sumRe));

//const Young = new Student(72, 95, 98);
//const Min = new Student(80, 86, 84);
