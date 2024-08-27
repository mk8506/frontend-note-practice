//#5 //#6
class mylist { //underbar is just 관례 in the past
  data;
  size;

  constructor(data, size) {
    this.data = data;
    this.size = size;
  }
  
  push(item) { //add in the end
    this.data[this.size] = item;
    this.size++;
  }

  pop() { //delete the last element : init again
    const temp = this.data.slice(); //returns a shallow copy of an array
    this.data = new Array(this.size-1); //make a new array (init)
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = temp[i];
    }
    this.size--;
  }

  shift() { //index==0 delete
    const temp = this.data.slice();
    this.data = new Array(this.size-1);
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = temp[i+1];
    }
    this.size--;
  }

  unshift(item) {
    this.data[this.size] = undefined;
    this.size++;
    for (let i = this.data.length-1; i > -1; i--) {
      this.data[i] = this.data[i-1];
    }
    this.data[0] = item;
  }
}

const list = new mylist([3, 5], 2);
list.push(4);
console.log(list.data);
console.log(list.size);
list.pop();
console.log(list.data);
console.log(list.size);
list.shift();
console.log(list.data);
console.log(list.size);
list.unshift(2);
console.log(list.data);
console.log(list.size);

