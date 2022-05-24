// Given an array of strings, use the JavaScript map() function to return an array containing length of string at each index. The input array can be of length 0.


// Note

// Return 0 if the string is null or undefined

// Input -
// You are given an array named, arr.

// Output -
// Return the array containing the length of string at each index.

// Sample input 1 -
// ["hello","world"]

// Sample output 1 -
// [5, 5]


function findLength(arr) {

    
    arr = arr.map((str) => {
        if(str == undefined) return 0;
        else return str.length;
    })
    return arr;
}

console.log(findLength(["a","aa","aaa", undefined, "hello"]));