// const numbers = [45, 44 , 78 , 12, 13];

// const doubled = [];
// for (const number of numbers) {
//     const double = number * 2;
//     doubled.push(double);
// }

// console.log(doubled)


const numbers = [45, 44 , 78 , 12, 13];
// const doubled = numbers.map(num => num * 2)
// const doubled = numbers.map(num => num + 2)
const doubled = numbers.map(num => num / 2)
console.log(doubled)


const friends = ['abdul', 'kamrul', 'sujon']
const lengths = friends.map(frnd => frnd.length)
// console.log(lengths)
const firstLetter = friends.map(frnd => frnd[0])
console.log(firstLetter);