var MyQuotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Hard work beats talent when talent doesn’t work hard.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "The best way to get started is to quit talking and begin doing.",
    "Success is not in what you have, but who you are.",
    "Difficulties in life are meant to make us better, not bitter.",
    "Don’t let yesterday take up too much of today.",
    "Mistakes are proof that you are trying.",
    "Learning never exhausts the mind.",
    "Education is the most powerful weapon you can use to change the world.",
    "The expert in anything was once a beginner.",
    "Knowledge is power, but enthusiasm pulls the switch.",
    "Small progress each day adds up to big results.",
    "Your limitation—it’s only your imagination.",
    "The beautiful thing about learning is that nobody can take it away from you.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "If you are working on something exciting, it will keep you motivated.",
    "Push yourself to keep learning every day."
];


var allQuotes = MyQuotes.slice(); 

var box = document.getElementById("quotes-box");
var button = document.getElementById("btn");
var reset = document.getElementById("reset-btn")
var moti = document.getElementById("motivational")
var learn = document.getElementById("learning")





function GenerateQuote() {
    if (allQuotes.length == 0) {
        box.innerText = 'All quotes are finished! ✅';
        return;
    }

    var randomQuote = Math.floor(Math.random() * allQuotes.length) //index logic [i]

    box.innerText = allQuotes[randomQuote]


    allQuotes.splice(randomQuote, 1)


}




