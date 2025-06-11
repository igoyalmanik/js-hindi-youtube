//iiife

// function chai(){
//     console.log((`DB CONNECTED`));
    
// }

// chai()


(function chai(){
    console.log((`DB CONNECTED`));
})() ; // semi colon is imp here.
//note it must be in parenthesis/ () () just like this
// globalscope ke pollutionn se problem hoti hai kyi bar, toh us global scope ke jo bhi variables hai ya fir declarations hai usko hatane ke liye humne iife ka use kiya.


( () =>  {
  console.log(`db connected two`);
}) ();

( (name) =>  {
  console.log(`db connected two ${name}`);
}) ('hitesh')