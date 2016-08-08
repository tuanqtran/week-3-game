// Create the a-z list for tihe computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
// Wins/Losses tally declaration set to 0
var wins = 0;
var losses = 0;
// Your guesses left so far set to 9 (Will decrement.)
var guesses = 9;
var guessesSoFar = [];

// Guess what letter I'm thinking of
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        if (userGuess == computerGuess){
                
                wins++
                guesses = 9;
                guessesSoFar = [];
                // alert("My Guess: " + userGuess);
                // alert("Computer Guess: " + computerGuess);

            }else if (guesses == 1){

                losses++
                guesses = 9;
                guessesSoFar = [];
                // alert("My Guess: " + userGuess);
                // alert("Computer Guess: " + computerGuess);

            }else{

                guesses--
                guessesSoFar.push(userGuess);
                // alert("My Guess: " + userGuess);
                // alert("Computer Guess: " + computerGuess);

            }

            var html = "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guesses + "</p>" +
            "<p>Your Guesses so far: " +  guessesSoFar + "</p>";

            document.querySelector(".game").innerHTML = html;
        }

//Making sure the user chooses a-z

    

// Wins: (# of times the user has guessed the letter correctly)


// Losses: (# of times the user has failed to guess the letter 
// correctly after exhausting all guesses)


// Guesses Left: (# of guesses left. This will update)


// Your Guesses So Far: (the specific letters that the user typed.
// Display these until the user either wins or loses.)


// When the player wins, increase the Wins counter and start
// the game over again (without refreshing the page).


// When the player loses, increase the Losses counter and restart
// the game without a page refresh (just like when the user wins).

