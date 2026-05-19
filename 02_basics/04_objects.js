// const user = new Object();
// console.log(typeof user);

const bankAccount = {}
bankAccount.accountHolderName = "Walter white"
bankAccount.branch = "Karamsad"
bankAccount.balance = 30000
bankAccount.accountType = "saving"
// console.log(bankAccount);

const nestedObjects = {
    Person : {
        Employee: {
            designation : "Devloper"
        },
        Manager: {
            designation : "Project Manager"
        }
    }
}

// console.log(nestedObjects.Person.Manager.designation);

obj1 = {1:'R',2:'O'}
obj2 = {3:'H',4:'I'}
obj3 = {4:'T'}

// obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const emp = [
    {
        name : "Y",
        dept : "IT"
    },
    {
        name : "A",
        dept : "HR"
    },
    {
        name : "S",
        dept : "Sales"
    },
    {
        name : "H",
        dept : "Purchasing"
    }
]

// console.log(emp[0].dept);

// console.log(Object.keys(bankAccount));
// console.log(Object.values(bankAccount));
// console.log(Object.entries(bankAccount));

// console.log(bankAccount.hasOwnProperty('email'));
// console.log(bankAccount.hasOwnProperty('balance'));

const course = {
    courseName : "JAVA",
    coursePrice : 999,
    courseInstructor : "Rohit Narayani"
}

const {courseInstructor : instructor,coursePrice:price,courseName:name} = course

console.log(instructor);
console.log(price);
console.log(name);