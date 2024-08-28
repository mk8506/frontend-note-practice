function doit() {
  console.log("setTimeout line1");
}

console.log("hello");
setTimeout(doit, 0); 
//runs in order.
//doit() starts after "hello"
//even though setTimeout is asynchronous
//this case "world" was printed first
//the key is that an independent space is provided
//for doit() when the line 'setTimeout' starts.
console.log("world");

console.log("-----------");

function doitAnthr() {
  console.log("start Anthr");
  setTimeout(() => console.log("setTimeout Anthr"), 3000);
}
function doit1() {
  console.log("setTimeout line2");
}

setTimeout(doitAnthr, 0);
setTimeout(doit1, 0);

//callback hell
asyncFunction1(function(result1) {                                                            
  asyncFunction2(result1, function(result2) {
    asyncFunction3(result2, function(result3) {
        console.log(result3);
    });
  });
});

//promise
asyncFunction1()
    .then(result1 => asyncFunction2(result1))
    .then(result2 => asyncFunction3(result2))
    .then(result3 => console.log(result3))
    .catch(error => console.error(error));
