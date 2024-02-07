'use strict';

const secureBooking=function()
{
    let passengerCount=0;
    return function()
    {
        ++passengerCount;
        console.log(`${passengerCount}`);
    }
}

//secureBooking execution have done when it is into booker variable.then it will also disappear from callstack
const booker=secureBooking();
booker();
booker();
booker();

//dir() method displays an interactive list of the properties of the specified JavaScript object

console.dir(booker);

//Example:-------2-------

let f;

const g=function()
{
    let a=23;
    f=function()
    {
       console.log(a*2);
    }
}

 const h=function()
 {
    const b=111;
   
   f=function()
   {
    console.log(b*2);
   }
 }

 g();
 f();
 console.dir(f)
//--------- reassigning f function.

h();
f();
console.dir(f);

//Example :2

const boardPassengers=function(n,wait)
{
    const perGroup=n/3;
    setTimeout(function(){
        console.log(`We have all ${n} passengers`);
        console.log(`There are 3 groups and each groups have ${perGroup} passengers`);
    },wait*1000);
  
    console.log(`Will start bording in:${wait} seconds`);
}

 //Closure have the priority over the scope chain..
  const perGroup=99;

    boardPassengers(90,5);
