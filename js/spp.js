'use strict';

let userName = prompt('welcome to my website , im glad to have you here!,first whats your name?');

alert(' welcome ' +userName + ' i hope you are doing well,lets get started');


let myTravels = prompt('have I ever been to America befor?,what do you think?').toLowerCase();

if(myTravels === 'yes' || myTravels === 'y'){

  alert('Unfortunately, you got the wrong answer');

  //console.log('have I ever been to America befor?,what do you think?, no');

}else if(myTravels === 'no' || myTravels === 'n'){

  alert('good anser.');

  //console.log('have I ever been to America befor?,what do you think?, no');
}

let myAge = prompt('do you think im above 20 or not?').toUpperCase();

if(myAge === 'YES' || myAge === 'Y'){

  alert('good answer , im already 27');

  //console.log('do you think im above 20 or not?,yes');

} else if( myAge === 'NO' || myAge === 'N'){

  alert('unfortunately, the answer is wrong');

  //console.log('do you think im above 20 or not?,yes');
}

let myRisidence = prompt(' am I living by my self ?').toUpperCase();

if(myRisidence === 'YES' || myRisidence === 'Y'){

  alert('Unfortunately, you got the wrong answer');

  //console.log('am I living by my self ?, no');

} else if( myRisidence === 'NO' || myRisidence === 'N'){

  alert(' good answer ');

  //console.log('am I living by my self ?, no');
}

let myHabit = prompt('do you think i like video games?').toLowerCase();

if( myHabit === 'yes' || myHabit === 'y'){

  alert('sorry , I dont like them');

  //console.log('do you think i like video games?,no');

} else if ( myHabit === 'no' || myHabit === 'n'){

  alert(' good answer');

  //console.log('do you think i like video games?,no');
}

let myLicense = prompt('do you think i have a drive license?').toUpperCase();

if( myLicense === 'YES' || myLicense === 'Y'){

  alert(' wrong answer, i dont even know how to drive haha');

  //console.log('do you think i have a drive license?, no');

}else if ( myLicense === 'NO' || myLicense === 'N'){

  alert('nice anwer');

  //console.log('do you think i have a drive license?, no');
}

alert(' I hope you enjoyed with this funny game :)');
