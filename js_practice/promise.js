// let myProm = new Promise((a, b) => {
//   let value = true;
//   if (value == true) {a("good")}
//   else {b("bad");}
// });
// myProm.then((succ) => {console.log(succ)}, (fail) => {console.log(fail)}); //promise.then();

// /**----------------*/

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);

/**-----------------------*/

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) { //returns a promise
  return new Promise((resolve, reject) => { //??
      let sum = num1 + num2;
      // if (sum == num1 + num2) {resolve(sum);}
      // else {reject("fail");}
      resolve(sum);
    }
  );
}

myCalculator(5, 5).then(result => {  //promise.then();
  myDisplayer(result); //calc -> displayer
});

/**----------------*/

// const myprom = new   new Promise((resolve, reject) => { //??
//   let sum = 1 + 2;
//   if (sum == 3) {resolve(sum);}
//   else {reject("fail");}
// }
// );

// let hello = String(myprom);
// console.log(hello);