const myNumrs = [1,2,3,4,5,6,7,8,9]

let newnums=myNumrs.map((num)=>num+10)
//console.log(newnums);

// chaining
const newNums = myNumrs
                .map((num)=> num * 10)
                .map( (num) => num+1 )
                .filter((num) => num>=40)
//console.log(newNums);

let myNums = [1,2,3]
let myTotal =  myNums.reduce(function (acc , currval ) {
    console.log((`acc: ${acc} and currval: ${currval}`));
    
    return acc + currval 
},0)
//console.log(myTotal);

 //myNums = [1,2,3]
 myTotal =  myNums.reduce(function (acc , currval ) {
    console.log((`acc: ${acc} and currval: ${currval}`));
    
    return acc + currval 
},3)

//console.log(myTotal);

 myTotal =myNums.reduce( (acc,curr) => acc+curr,0)
 console.log(myTotal);

 let shoppingCart = [
    {
        itemname:"js course",
        price : 2999
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
        {
        itemname: "data science couse",
        price: 15999
    }
 ]

 let price2pay=shoppingCart.reduce((acc,item)=> acc+ item.price, 0)
 console.log(price2pay);
 