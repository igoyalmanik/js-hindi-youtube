// if
// const isUserLoggedin = true;

// if(isUserLoggedin){

// }

// if( 2 == "2"){
//     console.log("executed"); // this will run because '==' operator converts no into string , for this we can you strick check '==='
// }

const temperature = 50;

// if(temperature!==51){
//     console.log("less than 50");
    
// }
// else
// {
// console.log("temperature is greater than 50");
// }

const score = 200

// if(score>100)
// {
//     const power  = "fly"
//     console.log(`user power : ${power}`)
// }

const balance = 1000
// if(balance < 200)
//     console.log("test") , console.log("test2");

//  if(balance < 500){
//      console.log("less than 500");
     
//  }   else if (balance< 750)
//  {
//     console.log("less than 750");
    
//  } else if(balance < 1000)
//  {
//     console.log("less < 1000");
    
//  } else{
//     console.log("less < 1200");
    
//  }

const isUserLoggedin = true 
const debitCard = true 
const UserLoggedinfromgoogle = false;
const loggedinfromemail = true

if(isUserLoggedin && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(UserLoggedinfromgoogle || loggedinfromemail) 
{ 
   console.log("USer logged in");
}

// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1: 
        console.log("jan");
        break;
    case 2: 
        console.log("feb");
        break;
    case 3: 
        console.log("march");
        break;

    default:
        console.log("no match");
        break;
}