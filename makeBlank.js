var fs = require('fs');

var makeBlank = function () {

    this.checkBlanks = function (userinput) {
        fs.readFile("word.txt", "utf8", function (error, data) {
            var dataArray = data.split("//");
            var word = dataArray[0];
            var blankArray = dataArray[1].split(" ");      
            var wordCount = word.length;
            var displayArray = "";
            var wordSplit = word.split("")
            var inputRecord = dataArray[2]+userinput;

            for (var i = 0; i < wordCount; i++) {

                if (userinput === wordSplit[i]) {
                    blankArray[i] = userinput;
                }
            }
            for (var i = 0; i < wordCount; i++) {
                displayArray += blankArray[i] + " "
            }
            var toWrite = word + "//" + displayArray + "//" + inputRecord;
            fs.writeFile("word.txt", toWrite, function () {
            })
            console.log(displayArray)
            

        })
    }
}

    module.exports = makeBlank;