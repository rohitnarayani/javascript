myArr = [1,2,3,4,5,6,7,8,9,10]

// const values = myArr.map((n)=>n*10)
// console.log(values)


const methodChaining = myArr.map((n)=> n * 10)
                            .map((n) =>n / 2 )
                            .filter((n)=>n >10)

console.log(methodChaining)