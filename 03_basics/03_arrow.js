const user = {
    username : "KING",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "LABAD"
// user.welcomeMessage()

// console.log(this);

// function fun() {
//     // const username = "ARNOLD"
//     console.log(this);
// }
const fun = () => {
    // const username = "ARNOLD"
    console.log(this);
}

fun()

const arrowfunction = (a,b) => {
    return a * b
}

const square = (a) => (a*a)
// console.log(arrowfunction(2,3))
// console.log(square(11));

// const returnObjectUsingArrowFunction = () => ({username : "Ruhani"})
// console.log(returnObjectUsingArrowFunction())