// for each
const coding = ["js","ruby","java","cpp"]

//  coding.forEach( function (item) {
//    console.log(item);
   
//  } )

// in call back function we dont give name to  it.

// we can also use arrow function.
coding.forEach(  (item) => {
 //   console.log(item);
    
} )

function printMe(item){
    console.log(item);
}

 //coding.forEach(printMe); // just give the reference dont write  printMe() , this will execute it.mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
    
} )

const myCode = [
    {
        languageName:"javascript",
         filename : ".js"

    },

    {
        languageName:"java",
         filename : ".java"
         
    },
    
    {
        languageName:"python",
         filename : ".py",
         
    }
]

myCode.forEach((item)=> {
   console.log(item.languageName);
    
})

