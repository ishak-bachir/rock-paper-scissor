let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let result = document.getElementById("sus");
let userChoice;
function check(sus, callback) {
    userChoice = sus;
    callback();
}
function play() {
    let pcChoice = Math.floor(Math.random() * 3) + 1;
    if (pcChoice == 1) {
        pcChoice = "rock";
    } else if (pcChoice == 2) {
        pcChoice = "paper";
    } else {
        pcChoice = "scissors";
    }
    if (pcChoice == userChoice) {
        result.textContent = "Draw";
    } else {
        if (pcChoice == "paper" && userChoice == "rock") {
            result.textContent = "Computer wins";
        } else if (pcChoice == "rock" && userChoice == "scissors") {
            result.textContent = "Computer wins";
        } else if (pcChoice == "scissors" && userChoice == "paper") {
            result.textContent = "Computer wins";
        } else {
            result.textContent = "User wins";
        }
    }
}
rock.onclick = function() {
    check("rock", play);
};
paper.onclick = function() {
    check("paper", play);
};
scissor.onclick = function() {
    check("scissors", play);
};
