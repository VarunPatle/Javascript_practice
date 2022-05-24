// Problem Description
// Create an arrow function named modify() which takes an integer array as input and modify the array as follows -

// If an element of the array is prime, then add one to the element

// If an element of the array is not prime, then multiply the element by 2.


// Return the modified array.


// function isPrime(n) {

//     if(n == 0 || n == 1) {
    
//         return false;
    
//     }
    
//     for(let i = 2 ; i*i <= n ; i++) {
    
//         if(n%i == 0) {
    
//             return false;
    
//         }
    
//     }
    
//     return true;}
    

    let modify = (array) => {
        let newArray = [];
        let flag = true;
        array.forEach((a)=>{
            console.log(a); // 1
            if(a == 0 || a == 1) { 
                // modify function should return [0] for [0]
                if(array.length == 1 && a == 0){
                    newArray.push(0);
                    return newArray
                } 
                else flag = true;
            }
            
            for(let i = 2 ; i < a ; i++) {
    
                if(a%i == 0) {      
                   flag = false; 
                   break;    
                }
                else{
                    flag = true;
                }
            }
            console.log(flag)
            if(flag){
                let val = a+1;
                newArray.push(val);
            }else{
                let val = a*2;
                newArray.push(val);
            }
            }
        )

        return newArray;

        
    }

    console.log(modify([19, 27, 3, 23, 17]));