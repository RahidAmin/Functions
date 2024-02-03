'use strict';

const greet=function(greeting)
{
    return function(name)
    {
        console.log(`${greeting}:${name}`);
    }
}

greet('hey')('rahid');

const greet1=greet('hi');
greet1('siddique');

const greetArrow=(greeting)=>(name)=>console.log(`${greeting},${name}`);

greetArrow('hi')('sabila')

const greetArrow1=greetArrow('hlw');
greetArrow1('rahid')