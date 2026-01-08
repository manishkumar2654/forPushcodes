// ye brakit ji {} [] () ; ye sub refrence lete hai , b ko change karoge to a bhi change hoga ,




// let a = [1,2,3];
// let b = a;


// b.pop()


//******************************************** */


//string

// ' ' = single quotes;
// " " = double quotes;
// ` ` = backtick ;


// Number

// 12;
// 13.2;


//Boolean;

// let a = true;
// let b = false;




// null;

// nul ka mtlb  hai ki apne koi value  nahi di uski abhi value null de di hai;




// let a = null;


// Undefine;

// koi value hi nahi di ha , naam de k age kuch nahi likha hai;

// let a ;

















// symbol => unique immutable value create krta hai;
// ye librarire ka use krna bata raha hai bhai;









// let makeobject = {
//     name: "bai",
//     model: "manish"
// }


// makeobject.name = "rennu";


// dala to ye bhi add ho jaega , iske andar;
// pr ye main over write kr dega



// is leye hum symbol use krte hai ; game alsli ye hai;


// let u1 = Symbol("uid");
// let u2 = Symbol("uid");

///////////////////////////

// let obj = {
//     uid: 1,
//     name: "manish",
//     age: 12
// };

// let u1 = Symbol("uid");
// obj [u1] = 0;


//object me ek unick value create kr sakte hai




// bigint


//let a = 45455452548545548454545445545n;  


//upar wale primitive hai 
// inki value copy milte hai;



////////////////////////////////////////////

//    Array Object function

// refrence milta hai;


// yefrence value kya hoti hai => let a = [1, 2, 3];
// let b = a;

// b.pop(); 
// kara to dono me vale chane ho jaegi ,

// a or b dono me ;/





//ye object me bhi hota hai;

//   ex =>

    // let a = {
    //     name: "manish"
    // }

    // let b = a;

    //  b.name = "manishaaa";





    // Dynamic typing me hum container me data type change kr sakte hai;


    //  let a = 1;
    // a = [1, 2] bhi ho sakta hai;
    // a= { } ye bhi ho sakta hai 
    // a= null
    // a= undefin bhi ho sakta hai;
    //sub ho sakta hai 


    // type of

   // "5 " + 1 = 51 concadination


   /////////////////////////////////////////////////////////////////////


   //loops


//    for(let i=1 ; i < 101; i++) {
//     console.log(i);
    
//    }



// start
// while(end) {
//     //code 
//     change
// }



// let i = 1;
// while(i < 32){
//     console.log(i);
//     i++;
    
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
    
// }

// while(i < 20);


/////////////////////////////////////////

//break



// for (let i = 1; i< 3000; i++) {
//     console.log(i);
    
//     if(i === 32) {
//         break;
//     }
// }


//continue

// for(let i = 1; i < 30; i++){
//     if(i === 10){
//         continue;
//     }
//     console.log(i);
    
// }



// pratice loop;

// for (let i = 1; i < 11; i++) {
//     console.log(i);
    
// };



// let i = 10;

// while(i > 0) {
//     console.log(i);
//     i--;
    
// }






// for(let i = 1; i < 11; i++) {

//     let a = 5;
//   console.log(`5 * ${i} =  ${5*i} `);
  
   

    
// }


// let sum = 0;

// for(let i =1; i < 101 ; i++) {
//     sum = sum + i;
   
    
// }
//  console.log(sum);



// for(let i = 1; i < 51; i++) {
//     if(i % 3 == 0) {
//         console.log(i);
        
//     }
// }


// let valuu = prompt("give a number");


// for(let i = 1; i <= valuu; i++) {
//     if(i % 2 == 0) {
//         console.log("even");
//         console.log(i);
        
//     }
//     else{
//          console.log("odd");50
//         console.log(i);
       
        
        
//     }
// }


// let valuu = prompt("give a number");

// for(let i = 1; i <= valuu; i++) {
//     if(i % 3 == 0) {
//         console.log("3 wala");
//         console.log(i);
        
//     }
//     if(i % 5 == 0) {
//         console.log("5 hjhjh");
//         console.log(i);
        
//     }
//     else{
//          console.log("elsee");50
//         console.log(i);
       
        
        
//     }
// }





//  let valuu = prompt("give a number");


//  for(let i = 0; i < valuu; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
        
//     }
//  }



// for (let i = 1 ; i < 20 ; i++) {
//     if(i % 3 == 0 ) {
//         continue;
//     }
//     console.log(i);
    
// }



// let count = 0;
// for(let i =1; i< 101; i++){
//     if(i % 2 == 1){
//         console.log(i);
//         count++;
        
//     }
//     if(count == 5) {
//         break;
//     }
// }




//////////////////////////////////////



//sprade opratr 


// const man = (...val) => {
//     console.log(val);
    
// }


// man(1,2,3,4,5,6,7);






// const fun = (a,b,c, ...manish) => {
//     console.log(a,b,c);
//     console.log(manish);
    
// }



// fun(1,2,3,4,5,6,7,8,9)


// function abcd () {
//     return 12;
    
// }


// let man = abcd();
// console.log(man);



// hof hig oder function

// function man (val) {
// console.log(val);

// }

// man( function raj () {
//     console.log("hello");
    
// });




//



// function raj () {

//     return function () {console.log("hello");
//     }
// };

// raj()();

// invok functio

// (function () {
//     console.log("hetehettt");
    
// }) ();

//hoisting

// golo();

// function golo() {
//     console.log("hello");
    
// }; ye hai function statment is me hoistaing chal jaegi,




// function exprisson hai ,
//is me hoisting nahi chaliti hai


// manish();

// let manish = function () {
//     console.log("golu");
    
// }

/////////////////////////////



// bmi calculator

// function bmi (weight, height) {
//   return weight / (height*height)
// }


// console.log(bmi(90, 5.1));


// discount calculator,


// function discountCal (disval) {
//     return function (price) {
//         return  price-price * (disval / 100);

//     }
// }

// let ten = discountCal(10);
// let twenty = discountCal(20);

// console.log(ten(1200));
// console.log(twenty(1200));



// count

// function counter () {
//     let count = 0;
//     return function () {
//         count ++;
//         return count;
//     }
// }


//   let c = counter();
//   let v = counter();

//  console.log( c());
//  console.log( c());
//  console.log( c());
//  console.log( c());
//  console.log( v());

 //ye closer hai,
 

 //double value ;

//  function doublr (val) {
//     return val * 2;
//  }


// console.log( doublr(5));

// ifie function ap isko bhar pas nahi kr sakte ho,


// (function  () {
//     const password = "mansish";
//     console.log(password);
    
// }) ();


// arays

// let arr = [1,2,3,4,5,6];

// arr[2] = 12;
// console.log(arr);

//////////////////////



// let arr = [1,2,3,4,5,6];
// arr.push(5000);
//ye last me vall add karega



// let arr = [1,2,3,4,5,6];
// arr.pop();
// ye lask ki value hataega


// let arr = [1,2,3,4,5,6];
// arr.shift();
// ye staring value hata dega



// let arr = [1,2,3,4,5,6];
// arr.unshift(66);
//ye starting me value add krta hai


// let arr = [1,2,3,4,5,6];
// arr.splice(2,2)
//ye bich se value hata hai
//ye purne arr koi hi chage krta hai


// let arr = [1,2,3,4,5,6];
// let arr2 = arr.slice(1,4);
// kaha tak hatana hai,
//lha tak chai ye ye dono para mert pas hoege
//or ye new arr return krrega


// let arr = [1,2,3,4,5,6];
// arr.reverse();
//ye number rever krta hai



// let arr = [11,2,43,4,15,6];
// let manis = arr.sort(function(a,b){
//    return a-b;
// });
//ye assanding or desanding me kaam aega


/////////5///////////////////////////////////////////



// let arr = [11,6,5,56,99,77,4];

// arr.forEach(function (val){
//     console.log(val);
    
// });
//ye purane arr me hi value dikha derta hai


//map
//ye tab bana hai jab purane arr k data ko leke naya data add krna hai ya 

//map dikte hi sat ek naya arr banao;


// let arr = [11,6,5,56,99,77,4];


// let arr2 = arr.map(function (val) {
//     return val + 5;
// })


// let arr = [1,2,3,4,5];
// let arr2 = arr.filter(function (val) {
//     if(val > 3) return true;
// })


//sum of all arr
// let arr = [1,2,3,4,5];
// let ans = arr.reduce(function(acc, val){

//     return acc + val
// },0)


// let arr = [1,2,3,4,1,5];

// let va = arr.find(function(val) {
//     return val < 2;
// })


// let arr = [1,2,3,4,5];
// let arr2 = arr.some(function(val) {
//     return val > 3;
// })


// let arr = [1,2,3,4,5];
// let arr2 = arr.every(function(val) {
//     return val > 0;
// })






//destructing;

// let arr = [1,2,3,4,5];
// let [a,b, , d] = arr;


//array copy and sprade oprator;
// let arr = [1,2,3,4,5];
// let newar = [...arr]




//add arr thigs in center

// let arr =["mango","apple"];
// arr.splice(1,0,"red","vaishali");

// let arr = [1,2,3,4,5,6];
// let newarr = arr.slice(2,4);


let names = ["manish", "vaishali", "neha", "chiya"];
 names.sort().reverse();


 let arr = [2,22,4,5,66,88];

 let vaishali = arr.filter((val)=>{
    return val > 10;
 });
