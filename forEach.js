//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition//

const numbers = [1, 5 , 7, 10, 34, 32, 745]
const players = [7, 10, 34, 32, 555]
// const selected = players.filter(p =>p>70);
// const selected = players.filter(p =>p>7);
const selected = players.filter(p =>p%2 ===1);

// console.log(selected);


const friends = ['Tom', 'jamal', 'kamal', 'shorif'];
const oddFriends = friends.filter(friend => friend.length>4)
// console.log(oddFriends)




const babies = [7, 10, 34, 32, 555]
const babyFind = babies.find(babi => babi > 80)
console.log(babyFind);


//map

//for Each

//filter

//find--- sorto thakbe filter er moto,,, sorto fullfil korle dibe , noyto undefined dibe==== eta single item return kore 

// reduce--sob gula udan theke nia nia ekta kicu banabe