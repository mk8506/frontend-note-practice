//#1
function printStar(max) {
  for (let i = 0; i < max; i++) {
    let str = "";
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}
printStar(5);
console.log("-----------");

//#2
function printRevStar(max) {
  for (let i = 0; i < max; i++) {
    let str = "";
    for (let j = 0; j < max - i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
printRevStar(5);
console.log("-----------");

//#3 //string is already an array itself
function myGame(num) {
  let sum = new Array(num);
  for (let i = 0; i < sum.length; i++) { //sum init
    sum[i] = 0;
  }
  let totalSum = 0;
  for (let i = 0; i < num; i++) { //m
    let strNum = String(i+1);
    const m = i+1;
    for (let j = 0; j < strNum.length; j++) { //n
      const n = Number(strNum[j]);
      if (n % 3 === 0 && n != 0) { //sum++
        sum[m-1]++;
      }
    }
    if (sum[i] != 0) {console.log("짝(%d) --> %d번", m, sum[i]);} //sum > 0
    else {console.log(m);} //sum==0
    totalSum += sum[i];
  }
  console.log("총 '짝' 개수: " + totalSum); //total
}
myGame(35); //call
console.log("-----------");

