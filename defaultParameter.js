'use strict';

const bookings=[];
const bookingFlight=function(flightNumber=1,numOfPassenger=1,price=120*numOfPassenger)
{
    //ES5
    // flightNumber=flightNumber || 1;
    // numOfPassenger=numOfPassenger || 1;
    // price=price || 1;

    
  const booking={
    flightNumber,
    numOfPassenger,
    price
  }
  console.log(booking)  
   bookings.push(booking);
}

bookingFlight('BG219',undefined,5);
console.log(bookings);