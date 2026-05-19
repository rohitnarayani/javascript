function greet(){
    console.log(`Hello this is a function without parameters`);
    
}

// greet()
function isEligibleToVote(age){
    if(Number(age)>18){
        return true
    }
    else{
        return false;
    }
}


function functionWithDefaultParameters(user = 'Unknow'){
    console.log(`${user} logged in successfully`);
    
}
// console.log(isEligibleToVote(18));
// functionWithDefaultParameters("Raj");

function calculateCartPrice(...product){
    return product;
}

// console.log(1,2,3);
// console.log(1,2,3,4,5);
// console.log(1,2,3,4,5,6,67,7);

const user = {
    email : "ceo@google.com",
    password : "21212"
}

function handleObject(anyObject){
    console.log(`Email: ${anyObject.email} and password: ${anyObject.password}`);
}

handleObject({
    email : "ceo@google.com",
    password : "21212"
});

function handleArray(arr){
    return arr[0]*arr[1]
}

console.log(handleArray([10,20,30,40,50]))