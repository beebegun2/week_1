function passByValue(a, b) {

  a=3;

  b=4;

  console.log("Inside the function")

  console.log("a: ",a, " b: ",b);

}

let a = 1;

let b = 2;

console.log("Outside Function. Before calling function");

console.log("a: ",a, " b: ",b);

passByValue(a, b);

console.log("Outside Function. After calling function");

console.log("a: ",a, " b: ",b);
