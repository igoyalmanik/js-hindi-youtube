// console.log("h");
// console.log("i");
// console.log("T");
// console.log("e");
// console.log("s");

function saymyname()
{
console.log("h");
console.log("i");
console.log("T");
console.log("e");
console.log("s");

}

//saymyname();

function addTwonumbers(num1,num2) // (there are call parameters.)
{
  console.log(   num1+num2);

}

addTwonumbers(2,3)   //(these are called arguements.)
addTwonumbers(2,"3")
addTwonumbers(2,"a")

const result = addTwonumbers(3,5);
//console.log("Result: ",result); //undefined


function add2numbers(num1,num2)
{
    return num1+num2
    console.log("Hitesh");
}

const rslt2 = add2numbers(3,5)
//console.log("Result 2:",rslt2);

function loginuserMessage(username){
    
    return `${username} just logged in`
}

// console.log(loginuserMessage("hitesh"))
// console.log(loginuserMessage(""))
// console.log(loginuserMessage()) // whe we dont pass any value; to prevent this.

function loginuserMessage2(username){
    if(username === undefined)
    {
        console.log("Please enter a username")
        return;
    }
    return `${username} just logged in`
}

//console.log(loginuserMessage2());

//we can also give a default value.
function loginuserMessage3(username="user"){
    // if(username === undefined)
    // {
    //     console.log("Please enter a username")
    //     return;
    // }
    return `${username} just logged in`
}

// console.log(loginuserMessage3())
// console.log(loginuserMessage3("Hitesh"))


function calculatecartprice(...num1)
{
    return num1
}

 console.log(calculatecartprice(100,200,400,600))

 
function calculatecartprice2(val1,val2,...num1)
{
    return [val1,val2,num1]
}

 console.log(calculatecartprice2(100,200,400,600)) // fudu

 const user= {
    username : "Hitesh",
    price: 199
 }

 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }

 console.log(handleobject(user));
 handleobject(user);
 
 handleobject({
    username:"SAM",
    price : 399
 })

 const myNewArray = [200,400,100,600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));

 console.log(returnSecondValue([200,399]))