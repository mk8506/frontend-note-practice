//#1
const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {A: 0, B: 0, AB: 0, O: 0};
for (const k of blood) {
  result[k]++; 
}
console.log(result);
console.log("------------");

//#2 
//'k' is a string when it's used as a key in the for-in loop.
//During the first iteration, k would be '"철수"'.
const exam = {
  철수: [89, 82, 79, 92],
  민영: [91, 95, 94, 89],
  남철: [65, 57, 71, 64],
  혜진: [82, 76, 81, 83]
}
let totalSum = 0;
for (const k in exam) { //assign keys to k
  let sum = 0;
  //Accessing Object Properties: exam.k should be exam[k]
  //to dynamically access the values of the object properties.
  for (let e of exam[k]) { //use [] when NOT direct
    sum += e;
  }
  const avg = sum / exam[k].length;
  console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다", k, sum, avg);
  totalSum += sum;
}
const totalAvg = totalSum / Object.keys(exam).length; //size of json
console.log("모든 학생의 수학 총점은 %d점이고 평균은 %d점 입니다.", totalSum, totalAvg);
console.log("------------");

//#3
const covid19 = [ //no json name ? refer to the array name itself
  {date: "0125", active: 426}, 
  {date: "0126", active: 343}, 
  {date: "0127", active: 547}, 
  {date: "0128", active: 490}, 
  {date: "0129", active: 460}, 
  {date: "0130", active: 443},
  {date: "0131", active: 338}, 
  {date: "0201", active: 299}
]
let covidSum = 0;
let firstDate, lastDate;
let maxActive = covid19[0].active;
let maxDate;
for (let i = 0; i < covid19.length; i++) {
  covidSum += covid19[i].active;
  if (i===0) {firstDate = Number(covid19[i].date);}
  if (i===covid19.length-1) {lastDate = Number(covid19[i].date);}
  if (maxActive < covid19[i].active) {
    maxActive = covid19[i].active;
    maxDate = covid19[i].date;
  }
}
const covidAvg = covidSum / (lastDate - firstDate -69 +1); //gotta do smt
console.log("누적 확진자 수: %d", covidSum);
console.log("평균 확진자 수: %d", covidAvg);
console.log("확진자 최대일: %d", maxDate); //왜 문자열 0127로 안 나옴??