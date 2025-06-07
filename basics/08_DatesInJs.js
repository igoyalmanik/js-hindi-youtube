 let myDate = new Date()
// console.log(myDate);

//  console.log(myDate.toDateString())
//  console.log(myDate.toString())
//  console.log(myDate.toLocaleString())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,31)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023,0,31,6,45)
// console.log(myCreatedDate.toLocaleString())


// let myCreatedDate = new Date("14/01/2023")
// console.log(myCreatedDate.toLocaleString()) invalid date

  let myCreatedDate = new Date("01/14/2023")
//  console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// //To convert it in seconds 'divide' miliseconds by 1000.
// console.log(Date.now()/1000); // now it gives value in decimals so to avoid it use floor.
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log( newDate);
console.log( newDate.getMonth()+1);
console.log( newDate.getDay()+1);

// `${newDate.getDay()} and the time`
let v =newDate.toLocaleDateString( 'default',{
    weekday: "long",
}
     
)

console.log(v);


