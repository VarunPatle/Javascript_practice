// arr: The given array

// without: A list of elements which are to be removed from arr.

// Output -
// Return the array after removing the listed values.

// Sample input 1 -
// arr: [1, 2, 2, 3, 1, 2]

// without: [2, 3]

// Sample output 1 -
// [1, 1]

function removeListedValues(arr, without) {
    let newArr = [];
    
    for(let i=0; i< arr.length; i++){
         let isMatching = false;
         for(let j=0; j< without.length; j++){
             if(arr[i]===without[j]){
                  isMatching = true;
             } 
              
         }
         if(!isMatching){
              newArr.push(arr[i]);
         }
    }
    return newArr;
}