// Create the a-z list for tihe computer choices.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Wins/Losses tally declaration set to 0.
var wins = 0;
var losses = 0;
// Your guesses left so far set to 9 (Will decrement.).
var guesses = 9;
var guessesSoFar = [];

// Guess what letter I'm thinking of.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("First computerGuess: " + computerGuess);

// Function reset upon wins/losses.
function computerGuessReset(){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar = []
    guesses = 9
}

// Takes user key press and turns it into variable userGuess.
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Makes sure the user chooses a letter between a-z.
    if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') ||
        (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') ||
        (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') ||
        (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
        (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') ||
        (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') ||
        (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') ||
        (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
        (userGuess == 'y') || (userGuess == 'z')){

        // Wins if userGuess = to computerGuess.
        if (userGuess == computerGuess){
            wins++
            computerGuessReset();
            console.log("ComputerGuess win reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after win: " + computerGuess);
            console.log("-------------------------");

        // Losses when the guess counter hits 0.
        }else if (guesses == 1){
            losses++
            computerGuessReset();
            console.log("ComputerGuess loss reset: " + computerGuessReset);
            console.log("-------------------------");
            console.log("ComputerGuess new letter after loss: " + computerGuess);
            console.log("-------------------------");
        // Decrements guesses when userGuess != computerGuess.
        }else{
            // Check if the userGuess is not within the guessesSoFar.
            if(guessesSoFar.indexOf(userGuess) != -1){
                alert("Duplicate letter was pressed. Please try again.")
                console.log("UserGuess within the the for loop if statement: " + userGuess);
                console.log("-------------------------");
            // If userGuess is inside the guessesSoFar array, decrement guesses and push userGuess into guessesSoFar.
            }else{
                guesses--
                guessesSoFar.push(userGuess);
                console.log("UserGuess within the the for loop else statement: " + userGuess);
                console.log("-------------------------");
            }
        }
    // Alerts user if a invalid letter is pressed.
    }else{
        alert("Invalid letter. Please type a letter from a-z.");
        console.log("Alerts false letter: " + userGuess);
        console.log("-------------------------");
    }

// Prints the html layout below upon userGuess input.
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

// var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
// var computerChoices = ["a", "b"];

