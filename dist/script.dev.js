"use strict";

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
  questions: [{
    q: 'The ECG records:___________',
    options: ['The muscular contraction of the heart', 'Blood flow through the heart chambers', 'The passage of an electrical signal through the heart muscle', 'The opening and closing of the heart valves'],
    answer: 3
  }, {
    q: 'Oedema is:',
    options: ['Low blood volume', 'Excess interstitial fluid', 'Slow blood flow', 'An electrolyte imbalance'],
    answer: 2
  }, {
    q: 'The cardiovascular centre is found in the:',
    options: ['Carotid Sinuses', 'Atrial wall', 'Cerebrum', 'Brain stem'],
    answer: 4
  }, {
    q: 'The blood vessels that have the primary function of transporting nutrients and metabolites are:',
    options: ['Capillaries', 'Ateries', 'Venules', 'Arterioles'],
    answer: 2
  }, {
    q: 'Exchange of gases and food nutrients take place in the:',
    options: ['Capillaries', 'Ateries', 'Veins', 'Arterioles'],
    answer: 1
  }, {
    q: 'The right coronary artery is subdivided into:',
    options: ['Marginal and ascending branch', 'Marginal and descending branch', 'Circumflex and ascending branch', 'Circumflex and descending branch'],
    answer: 2
  }, {
    q: 'Blood supply to the liver comes from:',
    options: ['Hepatic portal vein and hepatic vein', 'Hepatic portal vein and hepatic artery', 'Hepatic portal vein and inferior vena cava', 'Hepatic portal vein and hepatic portal artery'],
    answer: 2
  }, {
    q: 'Mitral valve is otherwise Known as:',
    options: ['Tricuspid valve', 'Bicuspid valve', 'Triscuspid valve', 'Biscuspid valve'],
    answer: 2
  }, {
    q: 'The presence of interrelated disc in the cardiac muscles allows it to function as:',
    options: ['Syncytium', 'Sincitium', 'syncitinon', 'sincitinon'],
    answer: 1
  }, {
    q: 'The most prevalent type of cardiovascular disease in adult is:',
    options: ['Coronary artery disease', 'angina', 'Heart failure', 'Rheumatic heart disease'],
    answer: 1
  }, {
    q: 'The following are deep veins of the upper limb EXCEPT:',
    options: ['Axillary vein', 'Subclavian vein', 'Brachial vein', 'Cephalic vein'],
    answer: 4
  }, {
    q: 'Acceptable range of heart rate in the newborn infant is',
    options: ['90 - 140 beats / minutes', '120 - 160 beats / minutes', '80 - 110 beats / minutes', '60 - 90 beats / minutes'],
    answer: 2
  }, {
    q: 'An abnormally elevated heart rate above 100 beats/miutes in adult is referred to as',
    options: ['Bradycardia', 'Tachypnea', 'Tachycardia', 'Bradypnea'],
    answer: 3
  }, {
    q: 'Breathing that is normal in rate and depth is called',
    options: ['Apnoea', 'Eupnea', 'Rhythm', 'Bradypnea'],
    answer: 2
  }, {
    q: 'The difference between systolic and diastolic pressure is',
    options: ['pulse pressure', 'pulse disorder', 'peripheral pulse', 'pulse deficit'],
    answer: 1
  }, {
    q: 'What is the normal life span for healthy red blood cells',
    options: ['60days', '120days', '240days', '90days'],
    answer: 2
  }, {
    q: 'Before birth, which of the following structures connects the right and left auricles of the fetal heart?',
    options: ['Umbilical vein', 'Foramen ovale', 'Ductus arteriosus', 'Ductus venousus'],
    answer: 2
  }, {
    q: 'The formation of clot associated with inflammation of the vein is called',
    options: ['Venous stasis ulcer', 'Raynaud disease', 'Thrombophlebitis', 'Thrombositis'],
    answer: 3
  }, {
    q: 'The volume of red blood cell expressed in percentage is known as',
    options: ['Erythrocytosis', 'Blood cell ratio', 'Hematocrit', 'Blood volume'],
    answer: 3
  }, {
    q: 'In ECG reading, QPR complex represents',
    options: ['Ventricular systole', 'Ventricular diastole', 'Atrial diastole', 'Atrial systole'],
    answer: 1
  }, {
    q: 'During the transmission of action potential through the conducting system of the heart, a temporary delay occurs at the',
    options: ['Pacemaker', 'Av bundle', 'Purkinje fibres', 'AV node'],
    answer: 4
  }, {
    q: 'Which of the following blood vessels possesses valves?',
    options: ['Arterie', 'Capillaries', 'Veins', 'Sub venules'],
    answer: 3
  }, {
    q: 'Which of the following describes the degree of stretch of the cardiac muscles fibres at the end of Diastole?',
    options: ['Afterload', 'Venous return', 'Cardiac reserve', 'Preload'],
    answer: 4
  }, {
    q: 'The valve located between the right atrium and the right ventricle is called',
    options: ['Aortic semilunar valve', 'Pulmonary semilunar valve', 'Bicuspid valve', 'Tricuspid valve'],
    answer: 4
  }, {
    q: 'T-waves on an ECG represent',
    options: ['Depolarization of the ventricles', 'Repolarization of the ventricles', 'Depolarization of the atria', 'Repolarization of the atria'],
    answer: 2
  }, {
    q: 'Increased venous return results in',
    options: ['Increased stoke volume  ', 'Decreased stoke volume and heart rate', 'Increased cardiac output and pulse rate', 'Increased stoke volume and cardiac output'],
    answer: 4
  }, {
    q: 'The fluid between the parietal and visceral pericardial',
    options: ['Contracts the heart as it beats', 'Lubricates the heart as it beats', 'Relaxes the heart as it beats', 'Nourishes the heart as it beats'],
    answer: 2
  }, {
    q: 'The valves that separate the atria from the ventricles are called',
    options: ['Interatrial valves', 'Interventricular valves', 'Semilunar valves', 'Atrioventricular valves'],
    answer: 4
  }],
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