var readLineSync=require('readline-sync')

var name = readLineSync.question('Enter your name ');


console.log('HELLO ' +name+ ", PLEASE READ THE INSTRUCTIONS BELOW ")
console.log('You will be awarded +1 for every correct answer and -1 for every incorrect answer')
var userA=readLineSync.question('Type 1 for Cricket quiz or Type 2 for Quiz on Current Affairs ')
var score = 0;

// function to check the answer

function play(a,b){
  UserAns=readLineSync.question(a);
  if(UserAns.toUpperCase() === b){
    console.log('CORRECT')
    console.log("--------")
    score=score +1 ;
     console.log('Score is ' +score)
  }
  else{
    console.log('INCORRECT');
    console.log("--------")
    score =score -1;
     console.log('Score is ' +score)
  }
 
}
// user interested in cricket quiz
if(userA === '1'){

 var QuestionBank1=[{question:"Who won the 2019 World Cup ",answer:"ENGLAND"},{question:"Where is MCG ",answer:"AUSTRALIA"},{question:"Who won the IPL 2019 ",answer:"MUMBAI INDIANS"} ,{question:"Adam Gilchrist was the player of the match of which World Cup Final ",answer:"2007"},{question:"Andrew Tye is from which country ",answer:"AUSTRALIA"}]


 for(var i =0;i<QuestionBank1.length;i++){
   CurrentQuestion=QuestionBank1[i]
   play(CurrentQuestion.question,CurrentQuestion['answer'])
 }
 console.log('----------')
 console.log('Your final score is ' +score)


var high_score ={
  name : "Sparsh",
  score : 5
}



if (high_score.score <= score){
  console.log("You have scored the highest marks in the quiz")
}
else{
  console.log('Highest score is ' + high_score.score + ' and it is scored by ' + high_score.name ) 

}
  





 



// user interested in current affairs quiz

}
else if(userA === '2'){


  var QuestionBank2=[{question:"Who is the PM of Pakistan ",answer:"IMRAN KHAN"},{question:"How many bills were passed in Rajya Sabha in the winter session of Parliament? ",answer:"15"},{question:"Which startup is most valued startup in the world ",answer:"BYTE DANCE"} ,{question:"SoftBank belongs to which country ",answer:"JAPAN"},{question:"Who is the CM of Bihar ",answer:"NITISH KUMAR"}]


  for(var i =0;i<QuestionBank2.length;i++){
    CurrentQuestion=QuestionBank2[i]
    play(CurrentQuestion.question,CurrentQuestion['answer'])
  }
  console.log('----------')
  console.log('Your final score is ' +score)


  var high_score ={
  name : "Sparsh",
  score : 5
}



if (high_score.score <= score){
  console.log("You have scored the highest marks in the quiz")
}
else{
  console.log('Highest score is ' + high_score.score + ' and it is scored by ' + high_score.name ) 

}
  



}
else{
  console.log('You have entered the wrong digit')
}