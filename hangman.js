var getWords = require('./getWord.js');
var makeBlank = require('./makeBlank.js');
var inquirer = require('inquirer');

var get_word = new getWords();
var make_blank = new makeBlank();

initiate()

var word;
var blank_array;
var previousLetters;
var lifeLeft;
var gameOn = true;


main()

function main() {
    if (gameOn) {

        
        console.log("\nLife left: " + make_blank.lifeLeft)

        inquirer.prompt([

            {
                type: "input",
                name: "userInput",
                message: "Guess a letter!"
            }
        ]).then(function (n) {

            make_blank.checkBlanks(n.userInput, word, blank_array, previousLetters)
            word = make_blank.word;
            blank_array = make_blank.blankArray;
            previousLetters = make_blank.previousLetters;
            lifeLeft = make_blank.lifeLeft;

            previousLetters_array = previousLetters.split("")
            var previous_disp ="";
            for (var i=0; i<previousLetters_array.length; i++){
                previous_disp += previousLetters_array[i]+" ";
            }
            console.log("\nPrevious Inputs: "+previous_disp)
            win_check(word, blank_array, lifeLeft)
            main()
        })
    }
}

function initiate() {
    get_word.arrayOfWords()
    word = get_word.choosenWord;
    blank_array = get_word.blankArray;
    previousLetters = get_word.previousLetters;
    console.log(blank_array)
}

function win_check(word, blank_array, lifeLeft) {

    if (lifeLeft === 0) {
        console.log(
            "\n-------------------------------"+
            "\n          GAME OVER"+
            "\n    word was: " + word+
            "\n-------------------------------"
        )        
        gameOn = false;
        restart()
    }
    else {
        var Array = blank_array.split(" ")
        var user_word = "";
        for (var i = 0; i < Array.length; i++) {
            user_word += Array[i]
        }

        if (word == user_word) {
            console.log(
                "\n-------------------------------"+
                "\n           Winner!"+
                "\n-------------------------------"
            )
            gameOn = false;
            restart()
        }
    }
}

function restart() {
    inquirer.prompt([
        {
            type: "list",
            name: "do",
            message: "What would you like to do?",
            choices: ["Restart!", "Exit"]
        }
    ]).then(function (n) {

        if (n.do === "Restart!") {
            make_blank.lifeLeft = 15;
            gameOn = true;
            initiate()
            main()

        }
        else if (n.do === "Exit") {

        }
    })
}



