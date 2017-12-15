
var getWords = require('./getWord.js');
var makeBlank = require('./makeBlank.js');
var inquirer = require('inquirer');

var get_word = new getWords();
var make_blank = new makeBlank();

initiate()

main()

function main() {
    inquirer.prompt([

        {
            type: "input",
            name: "userInput",
            message: "Guess a letter!"
        }
    ]).then(function (n) {
        make_blank.checkBlanks(n.userInput)        
        main()
    })
    
}

function initiate() {
    get_word.arrayOfWords()
}




