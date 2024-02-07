'use strict';

(function()
{
    console.log('It will never call again');
})();

(()=>console.log('It will also never call again'))();