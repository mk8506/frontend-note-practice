//#4
function repeat(current, str, num) {
  if (num > current) {return str;}
  else {
    str += "*";
    return repeat(current, str, num+1); //you forgot to return!!!
  }
} //num이 1로 바뀌고 return value가 undefined로 바뀌는 이유가 뭐지

function star(num, current=1) {
  if (current > num) {return;}
  else {
    const stars = repeat(current, "", 1);
    console.log(stars);
    star(num, current+1);
  }
}

star(5);
console.log("-----------");

//#5
function repeatRe(current, str) {
  if (current < 1) {return str;}
  else {
    str += "*";
    return repeatRe(current-1, str);
  }
}

function starRe(num, current=num) {
  if (current < 1) {return;}
  else {
    const stars = repeatRe(current, "");
    console.log(stars);
    starRe(num, current-1);
  }
}

starRe(5);
console.log("-----------");