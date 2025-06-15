 const coding = ["js","rubby","java"]
 const values = coding.forEach((item) => {
   // console.log(item);
    return;
 })

 //console.log(values);
 
 const myNums = [1,2,3,4,5,6,,7,8]
 
//  const newnums=myNums.filter( (num)=> {
//    return num>4} ) //it must contain a condition.
//  console.log(newnums);
 
//  const newnums = []
//  myNums.forEach((num)=>{
//     if(num > 4){
//         newnums.push(num)
//     }
//  })

//  console.log(newnums);
 
const books = [
    {
        title : 'book one', 
        genre : 'Fiction'
    },
       {
        title : 'book two', 
        genre : 'n-Fiction'
    },
       {
        title : 'book three', 
        genre : 'sc-Fiction'
    }
]


 let userbooks = books.filter((bk)=> bk.genre === 'Fiction' )
// console.log((userbooks));

 userbooks = books.filter((bk)=> bk.title === 'book one')
console.log(userbooks);
