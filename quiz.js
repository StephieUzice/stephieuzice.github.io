const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
      question: "Stephie is currently a:",
      answers: {
        a: "Undergraduate student",
        b: "PhD Student",
        c: "Post-doc",
        d: "NEET"
      },
      correctAnswer: "b"
    },
    {
      question: "Stephie's research is on:",
      answers: {
        a: "Bioelectrochemical systems",
        b: "She is thinks its bioelectrochemical systems but it needs to work to actually be that",
        c: "A literary review of the world's greatest fanfiction",
        d: "Biofuels"
        },
      correctAnswer: "b"
    },
    {
      question: "Stephie studies at:",
      answers: {
        a: "Curtin University",
        b: "CSIRO",
        c: "QUT",
        d: "All of the above... technically"
      },
      correctAnswer: "d"
    },
    {
      question: "Stephie likes to:",
      answers: {
        a: "Read (fiction because non-fiction is diabolical)",
        b: "Listen to podcasts on long drives",
        c: "Knit herself clothes",
        d: "All of the above...Choose this one cause I told you nothing about myself!"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz(){
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
        const answers = []
        for(letter in quizQuestions[i].answers){
            answers.push(
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter]
            + '</label>'
            );
            }
            output.push(
                '<div class="question">' + quizQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
                 );
    }
    quizContainer.innerHTML = output.join('');
    }
    function showResults(){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var numCorrect = 0;
        for(i=0; i<quizQuestions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(userAnswer===quizQuestions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }
            if (numCorrect === 0) { 
            resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
            }
            if (numCorrect === 1) { 
            resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
            }
            if (numCorrect === 2) { 
            resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
            }
            if (numCorrect === 3) { 
            resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Stephie pretty well!";
            }
            if (numCorrect === 4) { 
            resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Stephie so well!";
            }
    }
    buildQuiz();
    submitButton.onclick = function() {
        showResults();
         }
