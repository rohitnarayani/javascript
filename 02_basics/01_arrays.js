// const arr = [10,20,'hello',true,30.4,null,undefined]
// console.log(arr);

// const newArr = new Array(20.90,32.13,3)
// console.log(newArr[1]);

const myArr = [10,20,30,40,50]
// myArr.push(60);
// myArr.push(70);
// let popedElement = myArr.pop();
// console.log(popedElement);
// console.log(myArr);

// myArr.unshift(900)
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(30));
// console.log(myArr.indexOf(20));

// const otherArray = myArr.join(); // converts into string 
// console.log(typeof otherArray);

console.log(`Original Array before slice: ${myArr}`);
const sliceArray = myArr.slice(1,3)
console.log(`Result of slice: ${sliceArray}`);
console.log(`Original Array after slice: ${myArr}`);
console.log("\n\n");

console.log(`Original Array before splice: ${myArr}`);
const spliceArray = myArr.splice(1,3)
console.log(`Result of splice: ${spliceArray}`);
console.log(`Original Array after splice: ${myArr}`);