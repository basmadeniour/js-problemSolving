





// Exercise 1: Filtering an Array
// Problem: Write a function that takes an array of numbers and returns a new array containing only the even numbers

var x = parseInt(prompt("Enter the number of elements of your array"));
var arr = [];
for (var i = 0; i < x; i++) { 
    var y = parseInt(prompt("Enter the number with order " + (i + 1))); 
    arr.push(y); 
}

function filter_even(arr) {
    var even_arr = []; 
    for (var i = 0; i < arr.length; i++) { 
        if (arr[i] % 2 === 0) { 
            even_arr.push(arr[i]); 
        }
    }
   return even_arr
}

var evenNumbers = filter_even(arr);

console.log("Original array:", arr);
console.log("Even numbers:", evenNumbers);










// Exercise: 2 Find the Largest Number
// Problem: Write a function that takes an array of numbers and returns the largest number in the array

var x = parseInt(prompt("Enter the number of elements of your array"));
var arr = [];
for (var i = 0; i < x; i++) { 
    var y = parseInt(prompt("Enter the number with order " + (i + 1))); 
    arr.push(y); 
}

function findLargestNumber(arr) {
    var largest = arr[0]; 
    for (var i = 1; i < arr.length; i++) { 
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest; 
}

var largestNumber = findLargestNumber(arr);
console.log("The largest number is:", largestNumber);








// Exercise: 3 Reverse a String
// Problem: Write a function that takes a string as input and returns the same string but reversed

var x =prompt("Enter the number of elements of your array");
var arr = [];
for (var i = 0; i < x; i++) { 
    var y = prompt("Enter the number with order " + (i + 1)); 
    arr.push(y); 
}

function reverseArray(arr) {
    var reversedArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

var reverse = reverseArray(arr);
console.log("The reversed array is",reverse);











// Exercise: 4 Remove Duplicates
// Problem: Write a function that takes an array of numbers and returns a new array without duplicate numbers.

var x =prompt("Enter the number of elements of your array");
var arr = [];
for (var i = 0; i < x; i++) { 
    var y = prompt("Enter the number with order " + (i + 1)); 
    arr.push(y); 
}

function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]); 
        }
    }
    return uniqueArray;
}
var result = removeDuplicates(arr);
console.log("The array without duplicates is:", result);