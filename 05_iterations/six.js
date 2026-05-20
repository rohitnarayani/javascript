// const coding  = ["java","c++","python","c#","js"]


// const values = coding.forEach((item)=>{
//     return item;
// })

// console.log(values);

const arr = [1,2,3,4,5,6,7,8,9,10]

// const values = arr.filter((item) => item > 4)
// console.log(values);

// const values = arr.filter((item) => {
//     if(item > 4) return item;
// })
// console.log(values);

// const myArr = []

// arr.filter((item)=>{
//     if(item>4){
//         myArr.push(item);
//     }
// })

// console.log(myArr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   console.log(books.filter((book)=>book.genre="History"))

  const userBooks = books.filter((book)=>{
    return book.genre == "History" && book.publish > 1986
  })

console.log(userBooks);
