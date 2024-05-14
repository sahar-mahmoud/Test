//Exercise 1
 let user = {
  name: "John",
  years: 30,
 };

 let { name, years: age, isAdmin = false } = user;
 console.log(name, age, isAdmin);


//Exercise 2
// const planet = "Earth";
// let currentvisitorname = "Ali";


// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi(); // Hello, John

 

 /* Exercise 4
 var user={};
var user1={name:'John',surname:'Smith'};
console.log(user1);
user1.name='Pete';
console.log(user1.name);
console.log(user1);
delete user1.name
console.log(user1);*/

/* Exercise 5

const user = {
    name: "John"
  }
  
  // does it work?
  user.name = "Pete";
  console.log(user.name);

yes ,it will take the new value becouse A variable defined by a const has a constant value and can only be accessed within its domain.
*/

/* exercis 6

let salaries = {
    Fred: 100,
    Ted:160,
    Ghaith:130
};
 
 if(salaries!=0){ 
    sum=salaries.Fred+salaries.Ted+salaries.Ghaith ;
    console.log(sum);
 }
 else if(salaries===0) {
    console.log(sum===0)
 }; */


 /* 7

 // let result = a + b < 4 ? "Below" : "Over";
 */

 /*  8
  let message =
  login == "Employee"
     ? "Hello"
     : login == "Director"
     ? "Greetings"
     : login == ""
     ? "No login"
     : "";
            */

  