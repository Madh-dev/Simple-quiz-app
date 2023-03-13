"use strict";

var _q = require("./database/q1");

//variable declaration
var ul = document.getElementById('ul');
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var cA = document.getElementById('cA');
var totalQuestion = document.getElementById('totalQuestion');
var app = {
  questions: _q.questions,
  index: 0,
  load: function load() {
    if (this.index <= this.questions.length - 1) {
      quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
      totalQuestion.innerHTML = 'The total question is  ' + this.questions.length;
      cA.className = '';
      cA.innerHTML = '';
    } else {
      quizbox.innerHTML = "Quiz Completed!";
      ul.style.display = "none";
      nextButton.style.display = "none";
      cA.className = '';
      cA.innerHTML = '';
    }
  },
  next: function next() {
    this.index++;
    this.load();
  },
  check: function check(ele) {
    var id = ele.id.split('');

    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      this.scoreCard();
    } else {
      ele.className = "wrong";
      cA.className = 'correct';
      cA.innerHTML = 'the answer is  ' + this.questions[this.index].options[this.questions[this.index].answer - 1];
    }
  },
  preventClick: function preventClick() {
    for (var i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  allowClick: function allowClick() {
    for (var i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = '';
    }
  },
  score: 0,
  scoreCard: function (_scoreCard) {
    function scoreCard() {
      return _scoreCard.apply(this, arguments);
    }

    scoreCard.toString = function () {
      return _scoreCard.toString();
    };

    return scoreCard;
  }(function () {
    scoreCard.innerHTML = this.score + "/" + this.questions.length;
  })
};
window.load = app.load(); // it is called when an option is click

function button(ele) {
  app.check(ele);
  app.preventClick();
} // it is calld when next is click


function next() {
  app.next();
  app.allowClick();
}