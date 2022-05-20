/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */

const ul = document.getElementById('sorted-list');
 function generateSortedList(arr) {
     
     if(arr){
        let newArr = arr.sort();
        newArr.forEach(e => {
            const li = document.createElement('li');
            li.innerText = e;
            ul.append(li);
        });
        
     }
 }

 generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
 // generateSortedList([1, 2, 3]);
 // generateSortedList([]);