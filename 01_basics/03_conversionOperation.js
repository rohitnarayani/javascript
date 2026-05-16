let score = "hello";

let valueInNumber = Number(score)

// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

/* String to Number conversion
    "33" => prints 33 and type is Number
    "33abc" => Number but prints NaN(Not a Number)
    "" => prints 0 and type is number
    "xyz" => prints NaN and type is number
    true => prints 1 but type is number
    false => prints 0 but type is number
    NaN => prints NaN but type is number
    undefined => prints NaN but type is number
    null => prints 0 but type is number
*/

let name = NaN;

let valueINBoolean = Boolean(name);

// console.log(valueINBoolean);
// console.log(typeof valueINBoolean);

/*
    "true" => prints true and type is boolean
    "false" => prints true and type is boolean
    "xyz" => prints true and type is boolean
    "" => prints false and type is boolean
    1 => prints true and type is boolean
    0 => prints false and type is boolean
    undefined => prints false and type is boolean
    null => prints false and type is boolean
    NaN => prints false and type is boolean
*/

// **************** OPERATIONS ************************

let value = 23
let negValue = -value
// console.log(negValue);

str1 = "hello"
str2 = " darling"
str3 = str2 + str2

// console.log(str3);

// console.log(1+"2");
// console.log("4"+2);
// console.log(1+2+"44");
// console.log("2"+4+4);

// console.log(+true);//1
// console.log(+"");
// console.log(true+true+true);

let gameCounter = 100;
console.log(gameCounter++);
console.log(++gameCounter);

let num1 , num2 , num3;
num1 = num2 = num3 = 2 + 2;

console.log(num2);
