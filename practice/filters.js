// Problem Description
// Given an array of objects having properties, name and city. Use JavaScript filter() function to return an array containing objects having either Bangalore or Hyderabad as their city property value.


// Note: City name can be in lower case too. ex - bangalore, gwalior.


// Tip:

// As input string can be Bangalore or bangalore or BangaLORE, it’s alway better to convert the input string into lowercase and match lowercase with lowercase.

// You can convert a string into lowercase using following Javascript code

// Input -
// You are given an array named, array.

// Output -
// Return the array after filtering it.

// Sample input 1 -

// [

// {name: "John", city: "delhi" },

// {name: "Peter", city: "bangalore" },

// {name: "Mike", city: "Bangalore" },

// {name: "Rachel", city: "Hyderabad" }

// ]

// Sample output 1 -

// [

// {name: "Peter", city: "bangalore" },

// {name: "Mike", city: "Bangalore" },

// {name: "Rachel", city: "Hyderabad" }

// ]

let objArray = [{name: "John", city: "delhi" }, {name: "Peter", city: "bangalore" }, {name: "Mike", city: "Bangalore" }, {name: "Rachel", city: "Hyderabad" }]


function filterByCity(arr) {
    let filteredArray = arr.filter(person=>{
        person.city = person.city.toLowerCase();
        return person.city == 'bangalore' || person.city == 'hyderabad';
    })
    return filteredArray;
}

console.log(filterByCity(objArray));