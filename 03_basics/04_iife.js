// Immediately Invoked Function Expression

// sometimes global scope pollution affects the local scope so to avoid it we are using iffe

(function normalFunction(age){
    console.log(age);
})(20); //semicolon is necessary if you want to write more iife because without semicolon it doesn't
        //know where to stop the context so if you don't put semicolon it gives an typeerror 

((name) => {
    console.log(name)
})("Rahil")