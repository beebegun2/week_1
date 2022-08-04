// three inputs
// return the number of equal values => 0, 2, 3

const input1 = 20
const input2 = 30
const input3 = 40

20, 30, 40, => return should be 0
20, 20, 30 => return should be 2
30, 30, 30 => return should be 3

let answer = 0

if ((input1 === input2) && (input1 === input3)) {
    answer =2
}


console.log(answer)

