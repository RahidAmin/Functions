'use strict';

const onWard=function(str)
{
  return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord=function(srt)
{
    const [first,...others]=srt.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}
console.log(onWard('S A BIla'));
console.log(upperFirstWord('abc defgh i j k'));


//Higher Order Function
const transformer=function(str,fn)
{
  console.log(`Original String:${str}`);
  console.log(`Transformed String:${fn(str)}`);
  console.log(`Transformed By:${fn.name}`);
}

transformer('JavaScript is the best',upperFirstWord); //call back function
transformer('higher order function',onWard); 

//javascript uses callback all the times

const hi5=function()
{
    console.log('🖐');
}

document.body.addEventListener('click',hi5);

['rahid','amin','siddique'].forEach(hi5);