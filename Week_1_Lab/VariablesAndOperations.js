//create a variable to hold the quantity of available plane seats left on a flight
var availablePlaneSeats = 5;
		
//create a variable to hold the cost of groceries at checkout
var costOfGroceries = 15.50;

//create a variable to hold a person's middle initial
var middleInitial = "G";

//create a variable to hold true if it's hot outside and false if it's cold outside
var itsHotOutside = true;

//create a variable to hold a customer's first name
var customerFirstName = "Shannon";

//create a variable to hold a street address
var streetAddress = '568 Programmer Way';

//print all variables to the console (console.log)
console.log(availablePlaneSeats)
console.log(costOfGroceries)
console.log(middleInitial)
console.log(itsHotOutside)
console.log(customerFirstName)
console.log(streetAddress)


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
//always use console.log() to "print results to browser"

console.log(availablePlaneSeats)

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;

console.log(costOfGroceries)

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "L";
console.log(middleInitial)

//the season has changed, update the hot outside variable to be opposite of what it was
itsHotOutside = !itsHotOutside;
console.log(itsHotOutside)

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName = customerFirstName +" " + middleInitial + " Beebe";
console.log(fullName)

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi, my name is " + customerFirstName + " and I live at " + streetAddress + ".");