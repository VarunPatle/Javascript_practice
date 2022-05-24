// Write a method to replace all elements of an array by (i + 1) * arr[i], 
// where i is the position of an element in the array.


// Note: We are following a 0 based indexing.

// You are given an array arr.

// Output -
// Return the array after converting all the elements in the array

// Sample input 1 -
// [1, 2, 2, 3, 1, 2]

// Sample output 1 -
// [1, 4, 6, 12, 5, 12]

function convertArray(arr) {
    arr.forEach(manipulateArray);
    function manipulateArray(item, index, arr){
        arr[index] = (index+1) * arr[index];
    }
    return arr;
}

console.log(convertArray([1, 2, 2, 3, 1, 2]));