'use strict';

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





