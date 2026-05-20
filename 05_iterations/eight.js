const numbers = [1,2,3,4]

// const sum = numbers.reduce( function (acc,i){
//     console.log(`acc: ${acc} and i:${i}`)
//     return acc + i;
// },0)

// console.log(sum)

// const total = numbers.reduce( (acc,curr) => acc+curr,10)
// console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => {
    return acc + item.price;
},0)

console.log(totalPrice);
