const COLORS_ARRAY = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
COLORS_ARRAY.sort();

function runGame() {
    let guess = "";
    let correct = false;
    let numTries = 0;

    
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];

    console.log ("the Target color is = " + target);

    do{
    guess = prompt("I am thinking of one of these colors:\n\n" + COLORS_ARRAY.join(', ') + "\n\nWhat color am I thinking of?\n");
    numTries += 1;
    console.log ("number of attempts:" + numTries);

    if(guess === null) {
        alert("Game Over");
        return;
    }
    correct = checkGuess(guess, target);
    } 
    while (!correct);

    document.body.style.background = guess;

    alert("!!WINNER!!\n\nYou have guessed the correct color in " + numTries + "!");
    
}

function checkGuess(guess, target, numTries) {
    let correct = false;

    if(!COLORS_ARRAY.includes(guess)) {
        alert('Sorry, I don\'t recognize your color. Please try again, guessing from the list.')
    } else if(guess > target){
        alert('Sorry, your guess is incorrect.\n\nYour guess is alphabetically higher than mine.')
    } else if(guess < target){
        alert('Sorry, your guess is incorrect.\n\nYour guess is alphabetically lower than mine.')
    }else {
        correct = true;

    }
    return correct;

}


/*
function runColorGame() {
    
    let guessString = "";
    let guessColor = '0';
    let correct = false;
    let numTries = 0;

    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    do {
        guessString = prompt("Guess a color: " + colorBank + ". \n\n What is the color?");
        guessColor = +guessString;
        numTries += 1;
        correct = checkGuess(guessColor, target);
    } while (!correct);

    alert(`CORRECTAMUNDO DUDE!\n\nThe Color was ${target}.\n\nYou got it in ${numTries} tries.`);
}

function checkGuess(guessColor, target) {
    let correct = false;

    if (isNaN(guessColor)) {
        alert("That is NOT a number. \n\n Enter a NUMBER!");
    }else if ((guessColor <1) || (guessColor > 100)) {
        alert("HEY! \n\n The range is 1 to 100!");
    }else if (guessColor > target){
        alert("Too high...");
    }else if (guessColor < target) {
        alert("Too low...");
    }else {
        correct = true;
    }
    return correct;
}
*/
