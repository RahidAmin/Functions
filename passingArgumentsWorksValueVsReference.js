'use strict';

const flight='RL123';

const rahid={
    name:'Rahid Amin',
    passport:1234567
}

function checkIn(flightNumber,passenger)
{

/// it creates just copy of a flight
flightNumber='Ch123';

///but it actually change the value in the heap of rahid object
passenger.name='Mr.'+passenger.name;
if(passenger.passport===1234567)
{
    alert('Checked In');
}else{
    alert('Wrong Password');
}
// console.log(flightNumber,passenger);
}

checkIn(flight,rahid);


console.log(flight);
console.log(rahid);


const newPassport=function(person)
{
person.passport=Math.trunc(Math.random()*100);
// person.passport=99;
}

newPassport(rahid);
checkIn(flight,rahid);
console.log(rahid);

