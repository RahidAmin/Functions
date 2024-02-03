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

bimanBangladesh.book(316,'Rahid');
bimanBangladesh.book(120,'Amin');
console.log(bimanBangladesh)

const novoAir={
    airLine:'Novo Air',
    iataCode:'NVA',
    bookings:[],
    id:19
}

const book=bimanBangladesh.book;

//Call method
//if we want to use this keyword we have to use call() method
book.call(novoAir,1,'Nadia');
book.call(novoAir,2,'Samiya');
console.log(novoAir)

book.call(bimanBangladesh,202,'Siddique');
console.log(bimanBangladesh);

//Apply method this is old method for javascript
//we have to use array inside apply method

const passenger=[3,'Sabila'];

book.apply(novoAir,passenger);

book.call(novoAir,...passenger);