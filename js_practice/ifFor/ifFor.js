const a = 64;
if (a % (3 * 5) == 0) { //a % 3 == 0 && a % 5 == 0
  console.log("3과 5는 a의 공배수");
} else {console.log("공배수 아님");}

let str = "";
for (let i = 0; i < 9; i++) {str += i;}
console.log(str);

let x = 1; z = 0;
x = 1 - x;  //if 0 -> 1 else 1 -> 0
z = (z == 0 ? 1 : 0);
console.log(x, z);

const i = 55;
console.log("i = " + i); //console.log("i = %d", i); 

//use === not ==

// let num = 2;
// if (num == 2) {num -= 2;};
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10 && i%2 === num; j++) {
//     console.log("%d x %d = %d", i, j, i*j);
//   }
// }

//+=2, differ the starting -> 4-num
const num = 2;
for (let i = 4-num; i < 10; i+=2) {
  for (let j = 1; j < 10; j++) {
    console.log("%d x %d = %d", i, j, i*j);
  }
}