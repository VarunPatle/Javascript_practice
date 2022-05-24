// function removeListedValues(arr, without) {
//     for(let i=0; i< arr.length; i++){
//          for(let j=0; j< without.length; j++){
//               if(arr[i]==without[j]){
//                    arr.splice(i,1);
//               }
//          }
//     }
//     console.log(arr);
// }

// removeListedValues([1, 2, 2, 3, 1, 2], [2, 3]);



// function checkAlphabet(X) {

// 	let n = X.charCodeAt(0);
//     console.log(n)

// 	let strStartsWithALetter = (n>=65 && n < 91) || ( n>=97 && n<123);
//     console.log(strStartsWithALetter);

	

// // You can Google about what is ASCII code to know more about

// 	// why are we using numbers like 65, 91, 97 & 123

	

// if (strStartsWithALetter) {

// 	// Yes, it starts with an alphabet

// 	return true;

// } else {

// 	// No, it doesn’t start with an alphabet

// 	return false;

// } 

// }
// console.log(checkAlphabet('a'))





// function personDetail(a, b) {
//     let obj = {};
//     obj.firstName = a;
//     obj.lastName = b;
//     obj.fullName = a+" "+b;
//     console.log(obj)
// }

// personDetail("varun", "patle")



function getNumberOfDays(date) {
    let todaysDate = new Date();
    console.log(todaysDate, date);

    let arr = date.split('/')
    let day = parseInt(arr[0]);
    let month = parseInt(arr[1]);
    let year = parseInt(arr[2]);

    

    let newDate = new Date(year, month-1, day);
    let milisecondsDiff = todaysDate.getTime() - newDate.getTime(); 
    console.log(milisecondsDiff);

    let daysDiff = milisecondsDiff / (1000 * 60 * 60* 24);
    console.log(Math.floor(daysDiff));

    // newDate = 
}

getNumberOfDays("20/05/2022");