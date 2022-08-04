function passByReference(machine) {

  machine.name="Computer";

  machine.isOn = true;

}

var computer = {

  name: "myComputer",

  isOn: false

};

console.log("Before calling function");

console.log(computer.isOn);

console.log(computer.name);

passByReference(computer);

console.log("After calling function");

console.log(computer.isOn);

console.log(computer.name);
