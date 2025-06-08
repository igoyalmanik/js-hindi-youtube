// singleton constructor

// object literals

const mySym = Symbol("Key1") // process to create symbol in objects step1
console.log(typeof mySym)
Object.create // singleton through constructor method

const jsuser = {
    name : "hitesh",
    "full name":"Hitesh choudhary",
    age : 18,
    [mySym] : "mykey1", //way to create symbol inside objects step 2
    location: " jaipur",
    email:"Hitesh@google.com",
    isLoggedin : false,
    lastloginDays : ["Monday","sunday","friday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// //console.log(jsuser.full name)
// //console.log(jsuser."full name")
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]) // way to execute it step3
// console.log(typeof jsuser.mySym) //undefined

jsuser.email= "manik@google.com"
//Object.freeze(jsuser)
jsuser.email= "manik@giigle.com"
console.log(jsuser["email"])
console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js user")
}

console.log(jsuser.greeting)
console.log(jsuser.greeting());
jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting2())

