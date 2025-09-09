var questions = [
    "What is 7 + 5?",
    "Which of these is a string?",
    "Which array method adds an element at the end?",
    "What will '5' + 2 produce in JavaScript?",
    "Which operator checks equality without type conversion?",
    "What is the length of 'Hello'?",
    "What does Math.floor(4.7) return?",
    "Which keyword declares a variable in ES5?",
    "Which of these is a Boolean value?",
    "What is the result of 10 % 3?",
    "Which array method removes the last element?",
    "Which of these is used for multi-line comments?",
    "What does isNaN('abc') return?",
    "Which event occurs when a user clicks on an element?",
    "What is the output of 'abc'.charAt(1)?",
    "Which method converts a string to uppercase?",
    "Which operator is used for addition?",
    "What does parseInt('123') return?",
    "Which method removes the first element from an array?",
    "Which symbol is used for not equal?"
];


var options = [
    ["10", "12", "13", "14"],                 // Q1
    ["123", "'Hello'", "true", "false"],      // Q2
    ["push()", "pop()", "shift()", "unshift()"], // Q3
    ["7", "52", "Error", "NaN"],             // Q4
    ["==", "===", "=", "!="],                // Q5
    ["4", "5", "6", "Hello"],                // Q6
    ["4", "5", "4.7", "5.7"],                // Q7
    ["var", "let", "const", "define"],       // Q8
    ["yes", "0", "true", "no"],              // Q9
    ["3", "1", "0", "10"],                    // Q10
    ["push()", "pop()", "shift()", "unshift()"], // Q11
    ["// comment", "/* comment */", "# comment", "<!-- comment -->"], // Q12
    ["true", "false", "NaN", "undefined"],   // Q13
    ["onmouseover", "onclick", "onchange", "onsubmit"], // Q14
    ["b", "a", "c", "Error"],                 // Q15
    ["toUpperCase()", "toLowerCase()", "slice()", "split()"], // Q16
    ["+", "-", "*", "/"],                     // Q17
    ["123", "NaN", "'123'", "undefined"],    // Q18
    ["shift()", "pop()", "push()", "unshift()"], // Q19
    ["!=", "==", "===", "="]                 // Q20
];


var answers = [
    "12",            // Q1
    "'Hello'",       // Q2
    "push()",        // Q3
    "52",            // Q4
    "===",           // Q5
    "5",             // Q6
    "4",             // Q7
    "var",           // Q8
    "true",          // Q9
    "1",             // Q10
    "pop()",         // Q11
    "/* comment */", // Q12
    "true",          // Q13
    "onclick",       // Q14
    "b",             // Q15
    "toUpperCase()", // Q16
    "+",             // Q17
    "123",           // Q18
    "shift()",       // Q19
    "!="             // Q20
];


var questionBox = document.getElementById("question")
var labels = document.querySelectorAll("label")
var nextbtn = document.getElementById("btn")
var resetbtn = document.getElementById("reset")
var saveAnswers = document.querySelectorAll("input");
var currentIndex = 0;
questionBox.innerText = questions[currentIndex]
labels[0].innerText = options[currentIndex][0]
labels[1].innerText = options[currentIndex][1]
labels[2].innerText = options[currentIndex][2]
labels[3].innerText = options[currentIndex][3]

var score = 0;  //score initial

function reset() {
    currentIndex = 0;
    score = 0
    questionBox.innerText = questions[currentIndex]
    labels[0].innerText = options[currentIndex][0]
    labels[1].innerText = options[currentIndex][1]
    labels[2].innerText = options[currentIndex][2]
    labels[3].innerText = options[currentIndex][3]

    for (var i = 0; i < saveAnswers.length; i++) {
        saveAnswers[i].checked = false;
    }


    resetbtn.style.display = 'none'
    nextbtn.style.display = 'block'
    nextbtn.disabled = false;
    return
}

function nextQuestion() {

    //check user answer and 
    var UserAnswers;
    for (var i = 0; i < saveAnswers.length; i++) {
        if (saveAnswers[i].checked) {
            UserAnswers = labels[i].innerText
        }
    }
    if (!UserAnswers) {
        alert("Please select an option before moving to next question!");
        return;
    }

    //score updation
    if (UserAnswers == answers[currentIndex]) {
        score += 5
        console.log(score);
    } else {
        score += 0

    }

    currentIndex++

    //question end logic
    if (currentIndex >= questions.length) {
        questionBox.innerText = `🎉 Congratulations! Your Score is ${score}/${questions.length * 5}`;

        labels[0].innerText = ""
        labels[1].innerText = ""
        labels[2].innerText = ""
        labels[3].innerText = ""
        nextbtn.disabled = true;
        nextbtn.style.display = 'none'
        resetbtn.style.display = 'block'


        return;
    }

    // add question 
    questionBox.innerText = questions[currentIndex]
    labels[0].innerText = options[currentIndex][0]
    labels[1].innerText = options[currentIndex][1]
    labels[2].innerText = options[currentIndex][2]
    labels[3].innerText = options[currentIndex][3]

}

