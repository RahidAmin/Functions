'use strict';

const bimanBangladesh={
    airLine:'Biman Bangladesh',
    iataCode:'BAN',
    bookings:[],
   // book:function(){}
   book(flightNum,name)
   {
     console.log(`${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`);
     this.bookings.push(`Flight:${this.iataCode}${flightNum},${name}`)
   }
}

const novoAir={
    airLine:'Novo Air',
    iataCode:'NVA',
    bookings:[],
    id:19
}

const book=bimanBangladesh.book;

//This will not call book function but returns a new function,where this keyword will always be set to Novoair.
const bookNovoAir=book.bind(novoAir);

bookNovoAir(12,'Ellie Goldin');
console.log(novoAir)

const bookNovoAirFlight23=book.bind(novoAir,23);
bookNovoAirFlight23('Rahid Amin');
bookNovoAirFlight23('Gal Gadot');
console.log(novoAir);

//With Event Listener

novoAir.planes=300;
novoAir.buyPlanes=function()
{
    this.planes++;
    console.log(this.planes);
}
novoAir.buyPlanes();
document.querySelector('.buy').addEventListener('click',novoAir.buyPlanes.bind(novoAir));
console.log(novoAir);

//Partial Application

const addTax=(rate,value)=>value+value*rate;

console.log(addTax(0.1,100));

const addVat=addTax.bind(null,0.23);
console.log(addVat(100));

//important 

const addTaxRate=function(rate)
{
    return function(value)
    {
        return value+value*rate;
    }
}

const addVat2=addTaxRate(0.25);
console.log(addVat2(100));