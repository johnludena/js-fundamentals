/**

PART 0 *
Write a function that calculates the sum of all the numbers in an array */


var sumOfArray = function(inputArray){
	var total = 0;
    for (var i=0; i<inputArray.length; i++) {
       total +=  inputArray[i]; 
	}
    return total
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of 
// numbers as an argument and finds the highest number.

var maxOfArray =  function(inputArray) {
 	var maxChampion = 0
    for (var i=0; i < inputArray.length; i++) {
		if (typeof inputArray[i] === "number"){
             if (inputArray[i] > maxChampion) {
            	maxChampion = inputArray[i]
             }
        }
        else {
			maxChampion = NaN 
        }  
    }
    return maxChampion
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**

PART 2 *
Write a function isVowel() that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise. */

var isVowel = function (character){
	var vowels = ["a","A","e","E","i","I","o","O","u","U"]
    for (var i=0; i< vowels.length; i++) {
    	if(character === vowels[i]) {
            return true
        }
    }
    return false
}


console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**

Part 3 *
Define a function reverse() that computes
the reversal of a string. For example,
reverse("skoob") should return the
string "books". */

var reverse = function (string) {
	var reversedString = ""
    for (var i= string.length-1; i >=0; i--) {
        reversedString+= string[i]
    }
    return reversedString   
}

console.assert(reverse("books") === "skoob");
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**

Part 4 *
write a function the returns a FizzBuzz string for some number N (counting up from 1).
- for every number that isn't a multiple of 3 or 5, return a period "."
- for every number that is a multiple of 3 (but not 5), return "fizz"
- for every number that is a multiple of 5 (but not 3), return "buzz"
- for every number that is a multiple of 3 and 5, return "fizzbuzz" */

var fizzbuzz = function(number) {
	var result = ""
    
    for ( var i=1; i<=number; i++) {
    
        if ((i % 3 ===0) && (i % 5 !==0)) {
            result += "fizz"
        }
        else if ((i % 5 ===0) && (i % 3 !==0)) {
            result += "buzz"
        }
        else if ((i % 5 === 0) && (i % 3 === 0)) {
            result += "fizzbuzz"
        }

        else if ((i % 5 !== 0) || (i % 3 !==0)) {
            result += "."
        }
    }
    return result
}

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")



/**
Part 5 
Write a function findLongestWord() that takes a string of words and returns the longest word.
i.e. findLongestWord("a book full of dogs") should return "book" */

 var findLongestWord =  function (string) {
    var newArray = string.split(" ")
	var longChampion = "";
    for (var i=0; i < newArray.length; i++) {
    	if (newArray[i].length > longChampion.length) {
            longChampion = newArray[i]
        }
    }
    return longChampion;    
} 


console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("dont mess with Texas") === "Texas")


/** PART 6 *
write a function that returns the Greatest Common Denominator of two numbers
- if no GCD exists, return 1 */


var GCD = function(input1, input2) {
    if ( ! input2) {
        return input1;
    }

    return GCD(input2, input1 % input2);
};


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);