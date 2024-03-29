var answers = {};

var question_one = document.getElementById("question-1");
var question_two = document.getElementById("question-2");
var question_three = document.getElementById("question-3");
var question_four = document.getElementById("question-4");
var question_five = document.getElementById("question-5");

function storeAnswers(question_number, event) {
  if (event.target.type === "radio") {
    console.log(event.target.value);
    answers["question" + question_number] = parseInt(event.target.value);
    console.log(answers);
  }
}

question_one.addEventListener("click", function (event) {
  storeAnswers(1, event);
});
question_two.addEventListener("click", function (event) {
  storeAnswers(2, event);
});
question_three.addEventListener("click", function (event) {
  storeAnswers(3, event);
});
question_four.addEventListener("click", function (event) {
  storeAnswers(4, event);
});
question_five.addEventListener("click", function (event) {
  storeAnswers(5, event);
});

function totalScore() {
  var total_score =
    answers.question1 +
    answers.question2 +
    answers.question3 +
    answers.question4 +
    answers.question5;

  console.log("total score" + total_score);
  return total_score;
}

function getInfoBasedOnScore() {
  if (totalScore() < 3) {
    var score_info = "Você precisa estudar mais sobre Dilatação!";
  } else if (totalScore() > 2) {
    var score_info = "Parabéns! Você está sabendo bem sobre Dilatação!!";
  }

  return score_info;
}

var submit1 = document.getElementById("submit1");
var submit2 = document.getElementById("submit2");
var submit3 = document.getElementById("submit3");
var submit4 = document.getElementById("submit4");
var submit5 = document.getElementById("submit5");

function nextQuestion(question_number) {
  var current_question_number = question_number - 1;
  var question_number = question_number.toString();
  var current_question_number = current_question_number.toString();

  var el = document.getElementById("question-" + question_number);
  var el2 = document.getElementById("question-" + current_question_number);
  var el3 = document.getElementById("img-" + question_number);
  var el4 = document.getElementById("img-" + current_question_number);

  el.style.display = "block";
  el2.style.display = "none";
  el3.style.display = "block";
  el4.style.display = "none";
}

submit1.addEventListener("click", function () {
  nextQuestion(2);
  growProgressBar("40%");
});
submit2.addEventListener("click", function () {
  nextQuestion(3);
  growProgressBar("40%");
});

submit3.addEventListener("click", function () {
  nextQuestion(4);
  growProgressBar("80%");
});
submit4.addEventListener("click", function () {
  nextQuestion(5);
  growProgressBar("100%");
});

submit5.addEventListener("click", function () {
  nextQuestion(6);
});

submit5.addEventListener("click", function () {
  document.getElementById("printtotalscore").innerHTML = totalScore();
  document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
});

function growProgressBar(percentage_width) {
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width;
}
