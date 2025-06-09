const tinderuser = new Object() // singleton object
const tinderuser2 = {}  // non-singleton object , literal objects.

// console.log(tinderuser)
// console.log(tinderuser2);

tinderuser2.id = "123abc"
tinderuser2.name = "sammy"
tinderuser2.isloggedin= false;

//console.log(tinderuser2);

const regularuser = {
    email: "some@gmail.com",
    fullname : {
       userfullname: {
            firstname: "hitesh",
            lastname : "goyal"
        }    
    }

}

//  console.log(regularuser.fullname);

//  console.log(regularuser.fullname.userfullname);

// console.log(regularuser.fullname?.userfullname);  

// const obj1 = {1:"a" , 2: " b"}
// const obj2 = {3: "a", 4:"b"}
// const obj4 = {5: "a", 6:"b"}

// //const obj3 = {obj1,obj2}
// //const obj = Object.assign({},obj1,obj2,obj4) // target and source.
// const obj = {...obj1,...obj2}
// console.log(obj);

const users = [
    
       { id : 1,
        email : "h@gmail.com" },

         { id : 1,
        email : "h@gmail.com" },
                     
         { id : 1,
        email : "h@gmail.com" }

    ]

    users[1].email

    // console.log(tinderuser2);
    

    // console.log(Object.keys(tinderuser2))
    //  console.log(Object.values(tinderuser2))
    // console.log(Object.entries(tinderuser2)) 

    // console.log(tinderuser2.hasOwnProperty('isLoggedin'))

    const course = {
        coursename: "js in hindi",
        price: "999",
        courseInstructor : "hitesh"
    }

   // course.courseInstructor

   const {courseInstructor} = course
   console.log(courseInstructor)


 //  ---- object de-structuring
//    const navbar = ({company}) => {

//    }

//    navbar(company = "hitesh")

// API -> JUST GIVE YOUR WORK TO ANOTHER PERSON.
// object with dont have any name is called as jason. , they can also be in form of arrays.
// in form of object
// {
//    name:"hitesh",
//    coursename: "js in hindi",
//    price : "free"
// }
//in form of arrays
// [
//     {},
//     {},
//     {}
// ]