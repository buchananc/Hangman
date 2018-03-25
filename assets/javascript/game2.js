//Begin button

    //set wins to 0
    //set losses to 0
    //set guessed to ""
    //set word to ""
    //show rederScore
    //When start is clicked, say Welcome to Hangman
    //forever 
        //broadcast newGame and wait
        //broadcast render

    //when render is received
        //clear
        //broadcast renderGuess
        //broadcast renderScore



//Start Game

    //Delete all of alreadyGuessed

    //pickWord

        //set word to (item (pick random 1 to length of word)) of words
        //set indext to 1
        //set temp to 0
        //set guessed to 0
        //repeat 'length of word'
            //if alphabet contains (letter index of words) then
                //set temp to (join temp (letter index of word))
                //set guessed to (join guessed _)
            //change index by 1
        //set word to temp

    //Say Lets get started

    //Repeat until guessed = word or turns have run out

    //getGuess

        //ask 'Enter a letter below: and wait
        //repeat until (alphabet contains answer) and not (alreadyGuessed contains answer))
            //if (not alphabet contains answer) then
                //ask 'Ooops!  That wasn't a letter! Please enter a single letter below.'
            //if (alreadyGuessed contains answer) then
                //ask 'Ooopsp! You already guessed that!  Enter another letter below.'
        //set guess to answer
        //add guess to alreadyGuessed


    //set index to 1

    //set temp to 0

    //repeat length of word

        //if letter index of word = guess then

            //set temp to join temp and guess

        //else 

            //set temp to join temp (letter index of guessed)
        
        //chage index by 1
    
    //end repeat length of word

    //if temp = guessed then

        //alert incorrect

        //subtract a turn
    
    //else

        //set guessed to temp

//end game loop

//if guess = word then

    //change wins by 1

    //say congrats

//else

    //chage losses by 1

    //set guessed to word

    //say 'Sorry you lose. The word was 'word'. Better luck next time!

//End Game


//Guesses

    //When renderGuess is received

        //set index to 1
        //set sum to 0
        //repeat guessed.length
            //add letter index of guessed
            //change sum by (item # of letterSizes)
            //change index by 1
        //set index to 1
        //switch letter to (letter index of guessed)
        //go to x: (sum/-2 + (item # of letterSizes/2)) y: 125
        //repeat length of guessed
            //set temp to #
            //set size to 150%
            //show letter
            //switch line to letter index + 1 of guessed
            //change x by ((item # of letterSizes)/2 + (item temp of letterSizes)/2)
            //change index by 1
//End Guesses


//Score
    //When renderScore is received

        //render wins
        //render losses
