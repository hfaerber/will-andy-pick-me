var questionField = 'test';
var answerButton = document.querySelector('#answer-button');
var restateQuestion = document.querySelector('.restate-question-spot');
var randomAnswer = document.querySelector('.random-answer-spot');
var eightBallImg = document.querySelector('.ball-image');
eightBallImg.hidden = false;



answerButton.addEventListener('click', function() {
  questionField = document.querySelector('#question-input').value;
  event.preventDefault();
  eightBallImg.hidden = true;
  restateQuestion.hidden = false;
  restateQuestion.innerText = 'questionField';
  // event.preventDefault();
});
