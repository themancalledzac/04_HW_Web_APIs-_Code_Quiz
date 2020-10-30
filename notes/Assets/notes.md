# Task Notes

- setInterval to do the "timed" functionality

- clearInterval to STOP the timeout

- VAR currentScore/timeLeft that decreases as time goes on, or decreases as questions are wrong.

- VAR questions - ARRAY

- Questions can be not about coding questions

- VAR pointer/index - current position in the question array. starts with [0] to specify the first question.

- VAR startButton

```
var questions = [
    {
        // Question text (need a key and a value)
        // List of question answers
        // Corect answer
    }
]
```

```
GIVEN I am taking a code quiz

WHEN I click the 'start button'
* ADD event listener
function startGame() {

}
'start button'.addEventListener("click", startGame);


THEN a timer starts and I am presented with a question

// Set starting score

// Start the interval to begin the score countdown

//

WHEN I answer a question

THEN I am presented with another question

WHEN I answer a question incorrectly

THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0

THEN the game is over

WHEN the game is over

THEN I can save my initials and score

```
