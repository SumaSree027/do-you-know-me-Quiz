var readLine=require('readline-sync');
var userName=readLine.question('What is your Name? ');
var answer=readLine.question("Welcome "+userName+'! Do you know suma? ');
var score=0;
function play(question,answer){
    var userAnswer=readLine.question(question);
    if(userAnswer === answer){
        console.log('You are right');
        score=score+1;
    }else{
        console.log('You are wrong');
        score=score-1;
    }
    console.log("Your score: "+score);
    console.log('---------------------------------------');

}
var questionOne={
    question:'Where she live? ',
    answer:'Hyderabad'
}
var questionTwo={
    question:'what is her favourite food? ',
    answer:'Briyani'
}
var questions=[questionOne,questionTwo];
for(var i=0;i<questions.length;i++){
    play(questions[i].question,questions[i].answer);
}
 console.log("Your Final score: "+score);
    console.log('---------------------------------------');
