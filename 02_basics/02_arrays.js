const marvel_heroes = ["thor","ironman","spiderman","C-America"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes)
 console.log(marvel_heroes[4][0]);

//const allheroes = marvel_heroes.concat(dc_heroes)
//console.log(allheroes);

const all_newHeroes = [...marvel_heroes,...dc_heroes]
//console.log(all_newHeroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array);

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
