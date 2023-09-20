function runNumberGame() {
    
    let guessString = "";
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;
//    let userRange = prompt("What would you like your range to be? 1 to...");

//    const target = Math.floor(Math.random() * userRange) +1;
    const randomNumber = Math.random() * 100;
    const randomInteger = Math.floor(randomNumber);
    const target = randomInteger + 1;

    do {
        guessString = prompt("Guess a number from 1 to 100. \n\n What is the number? \n\n 1-100");
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber, target);
    } while (!correct);

    alert(`CORRECTAMUNDO DUDE!\n\nThe number was ${target}.\n\nYou got it in ${numTries} tries.`);
}

function checkGuess(guessNumber, target) {
    let correct = false;

    if (isNaN(guessNumber)) {
        alert("That is NOT a number. \n\n Enter a NUMBER!");
    }else if ((guessNumber <1) || (guessNumber > 100)) {
        alert("HEY! \n\n The range is 1 to 100!");
    }else if (guessNumber > target){
        alert("Too high...");
    }else if (guessNumber < target) {
        alert("Too low...");
    }else {
        correct = true;
    }
    return correct;
}

/*function checkRange(userRange) {

    if (isNaN(userRange)) {
        alert("That is NOT a number. \n\n Enter a NUMBER!");
    }else if ((userRange <1) || (userRange > 10000)) {
        alert("Sorry! \n\n The range is 1 to 9999!");
    }else {
        checkRange = userRange;
    }
    return userRange;
}*/
