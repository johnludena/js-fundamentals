// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(numbersArray) {
	var doubledArray = []
    for (var i = 0; i < numbersArray.length; i++) {
    	var doubledNumber = numbersArray[i]*numbersArray[i]
        doubledArray.push(doubledNumber)
    }
    return doubledArray
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.

var nicer = function (original) {
    var wordArray = original.split(" ")
    var filteredArray = []
    for (var i = 0; i < wordArray.length; i++) {
    	if ((wordArray[i] !== "heck") && (wordArray[i] !== "darn") && (wordArray[i] !== "crappy") && (wordArray[i] !== "dang")) {
            filteredArray.push(wordArray[i])
        }
    }
    var joinedSentence = filteredArray.join(" ")
    return joinedSentence
}

console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 

var capitalizeAll = function(sentence) {
     var stringArray = sentence.split(" ")
     var finalSentence = ""
     for (var i=0; i < stringArray.length; i++) {
      	var firstLetter = stringArray[i].substring(0,1)
     	var firstUpperCase = firstLetter.toUpperCase()
    	// Combining first uppercase letter with rest of word, plus an empty space after each word
        finalSentence += firstUpperCase + stringArray[i].substring(1,stringArray[i].length) + " "
    }
    // returning all characters in finalSentence string, except final last blank space
    return finalSentence.substring(0,finalSentence.length-1)
}

console.assert(capitalizeAll("every day is like sunday.") === "Every Day Is Like Sunday.")

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var properSentences = function (originalParagraph) {
 	var sentencesArray = originalParagraph.split(". ",3)
    var finalSentence = []
    for(var i=0; i < sentencesArray.length; i++) {
    	var firstLetter = sentencesArray[i].substring(0,1)
        var firstUpperCase =  firstLetter.toUpperCase()
        var fullSentence = firstUpperCase + sentencesArray[i].substring(1,sentencesArray[i].length)
		finalSentence.push(fullSentence)
    }
	var joinedString = finalSentence.join(". ")
	return joinedString
}

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function (originalString) {
 	var middlePoint = (originalString.length/2)
    var firstHalf = originalString.substring(0,middlePoint);
    var secondHalf = originalString.substring(middlePoint,originalString.length)
    var allTogether = firstHalf + "fun" + secondHalf
    return allTogether
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

var pipeline = function (value, functionOne, functionTwo) {
 	var firstResult = functionOne(value)
    var secondResult = functionTwo(firstResult)
    return secondResult
}

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
	// Missing returned value added below
	return newArr 
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
