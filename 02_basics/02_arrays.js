const ff_heros = ["DOM","BRAN","HAAN","RAMSEY"]
const got_heros = ["JAIME","NED","ROBB","ROBERT"]

// ff_heros.push(got_heros)
// console.log(`${ff_heros} \n\n`);
// console.log(typeof ff_heros);

// console.log(ff_heros[4][2]);

// let concatenatedArray = ff_heros.concat(got_heros);
// console.log(concatenatedArray);

// const all_heros = [...ff_heros,...got_heros]
// console.log(all_heros);

// const arrayOfArray = [10,20,[30,40],50,[60,70,[80,90,[95,100]]]]
// const flattendArray = arrayOfArray.flat(2)
// console.log(flattendArray);

console.log(Array.isArray("Tyrion"));
console.log(Array.from({name : "Nimeria"}));

const s1 = "got1"
const s2 = "got2"
const s3 = "got3"

console.log(Array.of(s1,s2,s3));