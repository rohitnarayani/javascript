//singleton
//Object.create()

// object literals

const mySym = Symbol("key1")

const javaUser = {
    "name ": "Rohit",
    [mySym] : "myKey",
    "full name": "Rohit Narayani",
    age : 19,
    location : "GOA",
    email : "ceo@google.com",
    isLoggedIn : false
}

// console.log(javaUser.email);
// console.log(javaUser["full name"]);

// console.log( javaUser["full name"]);

// Object.freeze(javaUser)
// javaUser.email = "lead@google.com"
// console.log(javaUser);

javaUser.greeting = function(){
    console.log(`Hello Java User ${this["name "]}`);
    
}

javaUser.greeting2 = function(){
    console.log("Hello This is chai or code");
    
}
console.log(javaUser.greeting())
console.log(javaUser.greeting2());
