var dictionary = require('word-list-google')
var fs = require('fs')


var getWords = function () {
    this.arrayOfWords = function () {
        var arrayOfWords = dictionary.englishUsaNoSwearsMedium

        var wordArray = arrayOfWords.slice(0, 20);

        var number = Math.floor(Math.random() * wordArray.length)

        var choosenWord = wordArray[number];
        var wordCount = choosenWord.length;
        var blankArray = "";
        
        for (var i = 0; i < wordCount; i++) {
            blankArray += "_ "
        }

        var toWrite = choosenWord+"//"+blankArray + "//"

        fs.writeFile("word.txt", toWrite, function () {
        })
        
        this.choosenWord = choosenWord;
        this.blankArray = blankArray;
        this.previousLetters = [];        
        
    }
}

module.exports = getWords;