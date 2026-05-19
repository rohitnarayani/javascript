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
console.log(isEligibleToVote(18));
functionWithDefaultParameters("Raj");