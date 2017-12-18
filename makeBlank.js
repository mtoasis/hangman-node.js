var fs = require('fs');

var makeBlank = function () {

    this.lifeLeft = 15;

    this.checkBlanks = function (userinput, word, blankArray, previousLetters) {

        var wordCount = word.length;
        var displayArray = "";
        var wordSplit = word.split("")
        var inputRecord = previousLetters + userinput;
        var flag = false;
        blankArray = blankArray.split(" ");

        for (var i = 0; i < wordCount; i++) {

            if (userinput === wordSplit[i]) {
                blankArray[i] = userinput;
                flag = true;
            }
        }
        for (var i = 0; i < wordCount; i++) {
            displayArray += blankArray[i] + " "
        }        

        for (var i = 0; i < previousLetters.length; i++) {
            if (userinput === previousLetters[i]) {
                flag = true
            }
        }

        if (!flag) {
            this.lifeLeft -= 1;
        }

        var blankArray_disp = "";
        for (var i = 0; i < blankArray.length; i++) {
            blankArray_disp += blankArray[i] + " ";
        }

        this.blankArray = blankArray_disp;
        this.previousLetters = inputRecord;
        this.word = word;

        console.log(displayArray)
    }
}


module.exports = makeBlank;