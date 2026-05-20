const arr = [10,20,30,40,50]
let str = "WELCOME JAVA USER"

const myObject ={
    name : "SUBZERO",
    age : 20,
    hobby : "swimming"
}

const map = new Map();
map.set("cpp","C++")
map.set("java","java")
map.set("js","javascript")
map.set("cs","C#")

// for(const key in myObject){
//     console.log(`${key} is key and value is ${myObject[key]}`)
// }

//for in loop doesn't work for map. it prints nothing

// for(const [key,value] in map){
//     console.log(`${key} and ${value}`)
// }

//for in prints the index of array or string

// for(const i in arr){
//     console.log(`array: ${i}`)
// }

// for(const i in str){
//     console.log(`string: ${i}`)
// }