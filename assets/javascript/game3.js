window.onload = function () {

var alphabet  = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
var word;           //random word
var guess;          //guess
var guesses = [ ];  //stored guesses
var lives;          //lives
var counter;        //sum of guesses
var space;          //number of spaces in word '_'

//elements
var showLives = document.getElementById("mylives");

//alphabet buttons
var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }    
}

//guesses list
result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        }   else {
            guess.innerHTML = "_";
        }

        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
}

//show lives
    comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }


// OnClick Function
    check = function () {
        list.onclick = function () {
            var guess = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter += 1;
                }
            }
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }

//Play game
    play = function () {
        words = [
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

        word = words[Math.floor(Math.random() * words.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        guesses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
    }

    play();

//Reset
    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        //context.clearRect(0, 0, 400, 400);
        play();
    }
}