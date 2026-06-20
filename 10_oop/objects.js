const user = {
    userName:"Hacker",
    password:"404Ifound",
    signedIn:true,
    getUserName : function (){
        // return this.userName;
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserName());\
// user.getUserName();
console.log(this);

function User(userName,loggedInCount,signedIn){
    this.userName = userName
    this.loggedInCount = loggedInCount
    this.signedIn = signedIn

    return this;
}

const userOne = new User("User001",12,true);
const userTwo = new User("Hacker",19,true);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);