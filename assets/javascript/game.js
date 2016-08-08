// Create the a-z list for tihe computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
// Wins/Losses tally declaration set to 0
var wins = 0;
var losses = 0;
// Your guesses left so far set to 9 (Will decrement.)
var guesses = 9;

// Guess what letter I'm thinking of
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    for (var i = guesses; i > 0; i--){
        var guess = prompt("You have " + guesses + " guesses left.");

        if (((userGuess == "a") && (computerGuess == "a")) || ((userGuess == "b") && (computerGuess == "b")) || 
            ((userGuess == "c") && (computerGuess == "c")) || ((userGuess == "d") && (computerGuess == "d")) || 
            ((userGuess == "e") && (computerGuess == "e")) || ((userGuess == "f") && (computerGuess == "f")) || 
            ((userGuess == "g") && (computerGuess == "g")) || ((userGuess == "h") && (computerGuess == "h")) || 
            ((userGuess == "i") && (computerGuess == "i")) || ((userGuess == "j") && (computerGuess == "j")) || 
            ((userGuess == "k") && (computerGuess == "k")) || ((userGuess == "l") && (computerGuess == "l")) ||
            ((userGuess == "m") && (computerGuess == "m")) || ((userGuess == "n") && (computerGuess == "n")) || 
            ((userGuess == "o") && (computerGuess == "o")) || ((userGuess == "p") && (computerGuess == "p")) || 
            ((userGuess == "q") && (computerGuess == "q")) || ((userGuess == "r") && (computerGuess == "r")) ||
            ((userGuess == "s") && (computerGuess == "s")) || ((userGuess == "t") && (computerGuess == "t")) || 
            ((userGuess == "u") && (computerGuess == "u")) || ((userGuess == "v") && (computerGuess == "v")) || 
            ((userGuess == "w") && (computerGuess == "w")) || ((userGuess == "x") && (computerGuess == "x")) ||
            ((userGuess == "y") && (computerGuess == "y")) || ((userGuess == "z") && (computerGuess == "z"))){
                
                win++
                guesses = 0;
                alert("My Guess: " + userGuess);
                alert("Computer Guess: " + computerGuess);

            }else if (((userGuess == "a") && !(computerGuess == "a")) || ((userGuess == "b") && !(computerGuess == "b")) || 
            ((userGuess == "c") && !(computerGuess == "c")) || ((userGuess == "d") && !(computerGuess == "d")) || 
            ((userGuess == "e") && !(computerGuess == "e")) || ((userGuess == "f") && !(computerGuess == "f")) || 
            ((userGuess == "g") && !(computerGuess == "g")) || ((userGuess == "h") && !(computerGuess == "h")) || 
            ((userGuess == "i") && !(computerGuess == "i")) || ((userGuess == "j") && !(computerGuess == "j")) || 
            ((userGuess == "k") && !(computerGuess == "k")) || ((userGuess == "l") && !(computerGuess == "l")) ||
            ((userGuess == "m") && !(computerGuess == "m")) || ((userGuess == "n") && !(computerGuess == "n")) || 
            ((userGuess == "o") && !(computerGuess == "o")) || ((userGuess == "p") && !(computerGuess == "p")) || 
            ((userGuess == "q") && !(computerGuess == "q")) || ((userGuess == "r") && !(computerGuess == "r")) ||
            ((userGuess == "s") && !(computerGuess == "s")) || ((userGuess == "t") && !(computerGuess == "t")) || 
            ((userGuess == "u") && !(computerGuess == "u")) || ((userGuess == "v") && !(computerGuess == "v")) || 
            ((userGuess == "w") && !(computerGuess == "w")) || ((userGuess == "x") && !(computerGuess == "x")) ||
            ((userGuess == "y") && !(computerGuess == "y")) || ((userGuess == "z") && !(computerGuess == "z"))){

                guesses = guesses - 1;
                alert("My Guess: " + userGuess);
                alert("Computer Guess: " + computerGuess);
        
    }            
    // while (guesses > 0){
        // var guess = prompt("You have " + guesses + " guesses left.");
        // if (!guess) break;
            // }


    }


            var html = "<h1>The Psychic Game</h1>" +
            "<p>Guess what letter I'm thinking of</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses: " + guesses + "</p>";

            document.querySelector(".game").innerHTML = html;

}


            // if (((userGuess == "a") && !(computerGuess == "a")) || ((userGuess == "b") && !(computerGuess == "b")) || 
            //     ((userGuess == "c") && !(computerGuess == "c")) || ((userGuess == "d") && !(computerGuess == "d")) || 
            //     ((userGuess == "e") && !(computerGuess == "e")) || ((userGuess == "f") && !(computerGuess == "f")) || 
            //     ((userGuess == "g") && !(computerGuess == "g")) || ((userGuess == "h") && !(computerGuess == "h")) || 
            //     ((userGuess == "i") && !(computerGuess == "i")) || ((userGuess == "j") && !(computerGuess == "j")) || 
            //     ((userGuess == "k") && !(computerGuess == "k")) || ((userGuess == "l") && !(computerGuess == "l")) ||
            //     ((userGuess == "m") && !(computerGuess == "m")) || ((userGuess == "n") && !(computerGuess == "n")) || 
            //     ((userGuess == "o") && !(computerGuess == "o")) || ((userGuess == "p") && !(computerGuess == "p")) || 
            //     ((userGuess == "q") && !(computerGuess == "q")) || ((userGuess == "r") && !(computerGuess == "r")) ||
            //     ((userGuess == "s") && !(computerGuess == "s")) || ((userGuess == "t") && !(computerGuess == "t")) || 
            //     ((userGuess == "u") && !(computerGuess == "u")) || ((userGuess == "v") && !(computerGuess == "v")) || 
            //     ((userGuess == "w") && !(computerGuess == "w")) || ((userGuess == "x") && !(computerGuess == "x")) ||
            //     ((userGuess == "y") && !(computerGuess == "y")) || ((userGuess == "z") && !(computerGuess == "z"))){
            //     // if ((userGuess == "abcdefghijklmnopqrstuvwxyz".split("")) && !(computerGuess == "abcdefghijklmnopqrstuvwxyz".split(""))){

            //     losses++
            //     alert("My Guess: " + userGuess);
            //     alert("Computer Guess: " + computerGuess);

            // }else if (((userGuess == "a") && (computerGuess == "a")) || ((userGuess == "b") && (computerGuess == "b")) || 
            //     ((userGuess == "c") && (computerGuess == "c")) || ((userGuess == "d") && (computerGuess == "d")) || 
            //     ((userGuess == "e") && (computerGuess == "e")) || ((userGuess == "f") && (computerGuess == "f")) || 
            //     ((userGuess == "g") && (computerGuess == "g")) || ((userGuess == "h") && (computerGuess == "h")) || 
            //     ((userGuess == "i") && (computerGuess == "i")) || ((userGuess == "j") && (computerGuess == "j")) || 
            //     ((userGuess == "k") && (computerGuess == "k")) || ((userGuess == "l") && (computerGuess == "l")) ||
            //     ((userGuess == "m") && (computerGuess == "m")) || ((userGuess == "n") && (computerGuess == "n")) || 
            //     ((userGuess == "o") && (computerGuess == "o")) || ((userGuess == "p") && (computerGuess == "p")) || 
            //     ((userGuess == "q") && (computerGuess == "q")) || ((userGuess == "r") && (computerGuess == "r")) ||
            //     ((userGuess == "s") && (computerGuess == "s")) || ((userGuess == "t") && (computerGuess == "t")) || 
            //     ((userGuess == "u") && (computerGuess == "u")) || ((userGuess == "v") && (computerGuess == "v")) || 
            //     ((userGuess == "w") && (computerGuess == "w")) || ((userGuess == "x") && (computerGuess == "x")) ||
            //     ((userGuess == "y") && (computerGuess == "y")) || ((userGuess == "z") && (computerGuess == "z"))){
            //     // }else if ((userGuess == "abcdefghijklmnopqrstuvwxyz".split("")) && (computerGuess == "abcdefghijklmnopqrstuvwxyz".split(""))){
                
            //     wins++
            //     alert("My Guess: " + userGuess);
            //     alert("Computer Guess: " + computerGuess);
                
            // }else{
            //     alert("Invalid Letter");
            //     alert("My Guess: " + userGuess);
            //     alert("Computer Guess: " + computerGuess);               

            // }


























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

