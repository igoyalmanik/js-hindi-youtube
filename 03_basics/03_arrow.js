const user= {
    username : "Hitesh",
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
        
    } 
    //this means current context.
    // arrow func. ke andr this nhi hota
}

//user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this) //{}

// function chai(){
//     let username="hitesh"
//     console.log(this.username) // undefined. actually this is used in objects not in functions.
    
// }

// chai()
 
const chai = () => {   // declaration of arrow function
    let username="hitesh"
     console.log(this)
}  


//chai()

//() => {} // a way declaration of arrow function
// we can also hold it in a variable
const addTwo = (num1,num2) => {
    return num1 + num2
} 

console.log(addTwo(3,4)) //7

// we dont need to write return here 
const addTwo2 = (num1,num2) =>  num1 + num2
console.log(addTwo2(3,4)) //7

//but if you are writing your code in curly braces(scope) then you have to write the return keyword.

const addTwo3 = (num1,num2) => {
     num1 + num2
} 

console.log(addTwo3(3,4)) //undefined

//what if you want to return an object.
const addTwo4 = (num1,num2) =>  {username:"hitesh"}
console.log(addTwo4(3,4)) //undefined because if you want to return an object you must have to wrap it in parnenthesis

const addTwo5 = (num1,num2) =>  ({username:"hitesh"})
console.log(addTwo5(3,4)) // hitesh

