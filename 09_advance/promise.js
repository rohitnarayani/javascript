const promiseOne = new Promise( (resolve,reject) => {
    setTimeout(()=>{
        console.log("Asyn task completed");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("Promise consumed");
})

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2 completed")
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("Second promise consumed")
// })

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Asyn task 3 completed");
        resolve({name:"Rohit",age:20})
    },1000);
})

promiseThree.then((user)=>{
    console.log(user);
})


// const promiseFour = new Promise((resolve,reject)=>{
//     let error = false;

//     if(!error){
//         resolve({username:'Labad',password:"Labad123"})
//     }else{
//         reject("ERROR: something went wrong");
//     }
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Either promise consumed or rejected");
// })

// const promiseFive = new Promise((resolve,reject)=>{
//     let error = false;

//     if(!error){
//         resolve({username:'JS',password:"JS123"})
//     }else{
//         reject("ERROR: JS WENT WRONG");
//     }
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     const response = await fetch('https://api.github.com/users')
//     console.log(response);
//     const data = await response.json()
//     console.log(data)
// }

// getAllUsers()

fetch('https://api.github.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})