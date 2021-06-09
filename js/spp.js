'use strict';

/*let count = 0;


let userName = prompt('welcome to my website , im glad to have you here!,first whats your name?');

alert(' welcome ' +userName + ' i hope you are doing well,lets get started');


let myTravels = prompt('have I ever been to America befor?,what do you think?').toLowerCase();

if(myTravels === 'yes' || myTravels === 'y'){

  alert('Unfortunately, you got the wrong answer');

  //console.log('have I ever been to America befor?,what do you think?, no');

}else if(myTravels === 'no' || myTravels === 'n'){

  alert('good anser.');

  count++;

  //console.log('have I ever been to America befor?,what do you think?, no');
}

let myAge = prompt('do you think im above 20 or not?').toUpperCase();

if(myAge === 'YES' || myAge === 'Y'){

  alert('good answer , im already 27');
  count++;

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
  count++;

  //console.log('am I living by my self ?, no');
}

let myHabit = prompt('do you think i like video games?').toLowerCase();

if( myHabit === 'yes' || myHabit === 'y'){

  alert('sorry , I dont like them');

  //console.log('do you think i like video games?,no');

} else if ( myHabit === 'no' || myHabit === 'n'){

  alert(' good answer');
  count++;

  //console.log('do you think i like video games?,no');
}

let myLicense = prompt('do you think i have a drive license?').toUpperCase();

if( myLicense === 'YES' || myLicense === 'Y'){

  alert(' wrong answer, i dont even know how to drive haha');

  //console.log('do you think i have a drive license?, no');

}else if ( myLicense === 'NO' || myLicense === 'N'){

  alert('nice anwer');
  count++;

  //console.log('do you think i have a drive license?, no');
}


let guessNumber = prompt(' now i have a number in my mind, and you have for chances to guess it, try now');

for(let i = 0; i<3 ;i++){
  if(guessNumber > 56){

    alert('too high');



  }else if( guessNumber < 56 ){

    alert('too low');

  }else if(guessNumber === '56'){

    alert('thats it 😍');
    count++;
    break;
  }
  guessNumber=prompt('try again');
}

if( guessNumber !== '56'){

  alert('the right answer is 56');
  // console.log('the right answer is 56')
}


let movieList = ['avangers ', ' black widow ', 'US ', 'Iron man ', 'Hulk ', 'superman ','Batman ','black cat ','mission impossible fallout'];

alert('try to guess my favourite movie ,you only have six attempts!');

let favMovie = prompt( 'Choose one of these (' + movieList + ')');

let attemptNumber = 0;

while( favMovie !== 'black cat' && attemptNumber<5){


  favMovie =prompt('Unfortunately, this a wrong answer, try again  (' + movieList + ')');
  attemptNumber++;
}
if(favMovie === 'black cat'){

  alert(' you hit the right answer 🥰');
  // console.log('the correct answer is black cat')
  count++;
} else{ alert('the correct answer is black cat');

}

alert(' I hope you enjoyed with this funny game 😀');

alert('you got ' + count + '/ 7');
*/



let count = 0;
function userQuery(query,correct,unCorrect){
  let userAnswer;

  do{

    userAnswer = prompt(query);


  } while(userAnswer !== 'yes' && userAnswer !== 'y' && userAnswer !== 'no' && userAnswer !== 'n');
  if (userAnswer === 'yes' || userAnswer=== 'y'){
    console.log(correct);


    alert('correct answer');

    count++;

  } else {
    console.log(unCorrect);
    alert('uncorrect anwer');
  }

}




userQuery('do you think im above 20 or not?','yes I am ','no I am not');

function userInput(query,correct,unCorrect){
  let userAnswer;

  do{

    userAnswer = prompt(query);


  } while(userAnswer !== 'yes' && userAnswer !== 'y' && userAnswer !== 'no' && userAnswer !== 'n');
  if (userAnswer === 'no' || userAnswer=== 'n'){
    console.log(correct);


    alert('correct answer');

    count++;

  } else {
    console.log(unCorrect);
    alert('the answer is wrong');
  }

}

userInput('do you think I like video games?','yes I do not love it','no I don\'t');
userInput('am I living by my self ?','yes I am not','no I am not');
userInput('have I ever been to America befor?', 'yes I have not', 'no I have not');
userInput('do you think I have a drive license?','yes I do','no I don\'t');


function guessNumber(){
  let guessNumber = prompt(' now i have a number in my mind, and you have for chances to guess it, try now');

  for(let i = 0; i<3 ;i++){
    if(guessNumber > 56){

      alert('too high');



    }else if( guessNumber < 56 ){

      alert('too low');

    }else if(guessNumber === '56'){

      alert('thats it 😍');
      count++;
      break;
    }
    guessNumber=prompt('try again');
  }

  if( guessNumber !== '56'){

    alert('the right answer is 56');
  // console.log('the right answer is 56')
  }

}
guessNumber();



let movieName = ['avangers', 'black widow', 'US', 'Iron man', 'Hulk', 'superman','Batman','black cat','mission impossible fallout'];

function userMovie(){

  let movie = prompt('try to guess my favourite movie ,you only have six attempts!');

  outerloop: for(let i=0 ; i < 5 ; i++){
    for(let m = 0 ; m < movieName.length ; m++){

      if(movie === movieName [m] ){

        alert('you hit the correct answer');
        count++;
        break outerloop;
      }
    }
    movie = prompt('inter new name agian');
  }
}
userMovie();

alert('you got ' + count + '/ 7');
alert(' I hope you enjoyed with this funny game 😀');





