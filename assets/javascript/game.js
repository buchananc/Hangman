//Hangman
document.querySelector('.game').innerHTML = '<p>sup</p>';

//Create an array of words
var words = [
    "clone",
    "force",
    "galaxy",
    "imperial",
    "rebellion",
    "destiny",
    "empire",
    "apprentice",
    "phantom",
    "menace",
    "alliance",
    "millennium",
    "deceive",
    "disturbing",
    "mission"
];

//Choose a random word
var word = words[Math.floor(Math.random() * words.length)];

//Answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var lettersLeft = word.length;

//Looping the game
while (lettersLeft > 0) {
    //Player progress
    alert(answerArray.join(" "));

    //Player guesses
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
        //End game
        break;
    } 
    else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    }
    else {
        //Update game with guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                lettersLeft--;
            
            }
        }
    }
    //Game loop ends
}

//Show answer
alert(answerArray.join(" "));
alert("The force is strong with this one!  The answer was " + word);