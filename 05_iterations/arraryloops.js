// for of

// ["",'',""]
// [{},{},{}]

const arr= [1,2,3,4,5]

for (const num of arr) {
  //  console.log(num);
}


//const f= greetings = "Hello world!"
const  greetings = "Hello world!"
for (const greet of greetings)
{
  //  console.log(`Each char is ${greet}`);

}

// Maps

const maps = new Map()
maps.set('IN',"India")
maps.set('FR',"FRANCE")
maps.set('RUS',"Russia")

//console.log(maps);

for (const key of maps)
{
  //  console.log(key);
    
}


// to print key and values individually
for (const [key,value] of maps)
{
  //  console.log(key,':-',value);
    
}

// const myObject = {
//     Game1 : 'NFS',
//     'Game2' :  'spiderman'
//  }

//  for (const [key , value] of myObject){
//     console.log(key,':-',value);
    
//  }

 // maps are iterable but not onjects in for of loop.

 const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb : "ruby",
    swift: "Swift by apple"
 }
 // for in

 for(const key in myObject)
 {
  //  console.log(key);
  //  console.log(myObject[key]);
 //  console.log(`${key} shortcut is for ${myObject[key]}`);
 }

 const programming = ["js","java","python","cpp"]
 for(const key in programming){
 //   console.log(key);
    // for in loop in array print the keys. not the values
    // to  print values :-
  //  console.log(programming[key]);
 }

const maps2 = new Map()
maps.set('IN',"India")
maps.set('FR',"FRANCE")
maps.set('RUS',"Russia")

// here in for in map isnot iterable.
for (const key in maps2) {
   console.log(maps2[key]);
}