//async
async function myFunction() { //returns Promise
  return "Hello";
}

//same as
function myFunction() {
  return Promise.resolve("Hello");
}

//await

(async () => {
  let myprom = new Promise(resolve => resolve("resolve string"));
  console.log(await myprom);
})();