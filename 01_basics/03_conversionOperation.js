let score = "hello";

let valueInNumber = Number(score)

console.log(valueInNumber);
console.log(typeof(valueInNumber));

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