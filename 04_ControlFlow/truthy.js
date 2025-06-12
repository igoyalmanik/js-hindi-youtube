const userEmail =[];
if(userEmail) {
    console.log(("got user email"));
    
} else{
    console.log("dont have user email")
}


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyobj = {}
if(Object.keys(emptyobj).length === 0)
{
    console.log("object is empty");
    
}

// nullish coalescing operator (??) : null,undefined
let val1;
val1 = 5??10
console.log(val1)

val1 = null??10
console.log(val1);

val1 = undefined ?? 15
console.log(val1);

val1 = null ?? 10 ?? 20
console.log(val1);

val1 = 2 ?? 10 ?? 20
console.log(val1);


var2 = undefined ?? 10 
console.log(var2);
//Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log('less than 80') : console.log("more than 80");

