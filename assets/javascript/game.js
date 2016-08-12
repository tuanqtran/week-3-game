// Create the a-z list for tihe computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
// var computerChoices = ["a", "b"];

// Wins/Losses tally declaration set to 0
var wins = 0;
var losses = 0;
// Your guesses left so far set to 9 (Will decrement.)
var guesses = 9;
var guessesSoFar = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("First computerGuess: " + computerGuess);

function computerGuessReset(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar = []
    guesses = 9
}

// Guess what letter I'm thinking of
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    //Making sure the user chooses a-z
    if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') ||
        (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') ||
        (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') ||
        (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
        (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') ||
        (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') ||
        (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') ||
        (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
        (userGuess == 'y') || (userGuess == 'z')){

        if (userGuess == computerGuess){
            wins++
            computerGuessReset();
            console.log("ComputerGuess win reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after win: " + computerGuess);
            console.log("-------------------------");
        }else if (guesses == 1){
            losses++
            computerGuessReset();
            console.log("ComputerGuess loss reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after loss: " + computerGuess);
            console.log("-------------------------");
        }else{
            // for(var n = 0; n < guessesSoFar.length; n++){
            //     if(userGuess.indexOf(guessesSoFar[n]) > -1){
                    guesses--
                    guessesSoFar.push(userGuess);
                    console.log(userGuess);
            //     }else{
            //         alert("Duplicate letter was pressed. Please try again.")
            //     }
            // }
        }     
    }else{
        alert("Invalid letter. Please type a letter from a-z.");
        console.log("Alerts false letter: " + userGuess);
        console.log("-------------------------");
    }

    var html = "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking of</p>" +
    // # of times the user has guessed the letter correctly
    "<p>Wins: " + wins + "</p>" +
    // # of times the user has failed to guess the letter correctly after exhausting all guesses
    "<p>Losses: " + losses + "</p>" +
    // # of guesses left.
    "<p>Guesses left: " + guesses + "</p>" +
    // The specific letters that the user typed. Display these until the user either wins or loses.
    "<p>Your Guesses so far: " +  guessesSoFar + "</p>";

    document.querySelector(".game").innerHTML = html;
}


