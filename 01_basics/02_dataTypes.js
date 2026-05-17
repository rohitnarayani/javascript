"use strict";// treat all js code as newer version

const integerData = 20000;
let stringType = "Hello";
let booleanType = true;
let name;
let temperature = null;

// alert(3+3)// we are in nodejs , not in browser 

/*
    number => 2 to power 53
    bigint
    symbol => unique
    undefined
    null => standalone value
*/

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// Categories of data type

// Primitive type: Number , String , Bigint , boolean , null , undefined , Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// const bigNumber = 545456486887878778
// console.log(typeof bigNumber);

// Reference(Non primitive) type: Array , Object , Functions

const heros = ['R','o','h','i','t']
console.log(typeof heros);

let myObject = {
    name: "Rohit",
    age : 30
}

console.log(typeof myObject);

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
