
// Question 1
// Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

//SOLUTION

let arr = [2,4,11,12,77,23,28,87,82];

for (let i=0;i<arr.length;i++){
    if(arr[i]%2 == 0){
        console.log("Even numbers are: " ,arr[i]);
    }
}

// ENDS


// Question 2
// Find the maximum consecutive 1's in an array of 0's and 1's.
// Example:
// a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
// b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]

//SOLUTION

//used the same array as given in the example.

let arr2 = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
let counter = 0;
let maxx = 0;

for (let j=0;j<arr2.length;j++){
    if (arr2[j] == 1){
        counter+=1
        maxx = Math.max(maxx,counter)
    }
    else{
        counter=0;
    }
}

console.log("Max num of consecutive 1's is ",maxx);

// ENDS


// Question 3
// Suppose you have an array of 101 integers. This array is already sorted and all numbers in this array are consecutive. Each number only occurs once in the array except one number which occurs twice. Write a js code to find the repeated number.
// e.g $arr = array(0,1,2,3,4,5,6,7,7,8,9,10...................);

//SOLUTION

let arr3 = [0,1,2,3,4,4,5,6,7,8,9,10];
//Since the array is sorted and consecutive, we can simply check if the number and its adjecent next are the same.

for (let k=1;k<arr3.length;k++){
    if(arr3[k] == arr3[k-1]){
        console.log("Repeated number is: " ,arr3[k]);
        break
    }
}

// ENDS


// Question 4
// Let’s see we an api url https://my-json-server.typicode.com/typicode/demo/posts
// Write a sample code to call this rest api and display the result.


//SOLUTION

let fetchResult = document.querySelector(".fetchResult");
let html = ""

function showData(data){
    // let str = JSON.stringify(data);
    for (let m=0;m<data.length;m++){
        html += 
        `<h2>${data[m].id}</h2>
        <p>${data[m].title}</p>
        `
    }

    fetchResult.innerHTML = html;
}

fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    .then(res=>res.json())
    .then(data=>showData(data));


//ENDS


// Question 5
// Assume there is a object of this format 
// var obj = {
//  “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }
// It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

// Write a code to sort the object by id 
// I.e final output should have objected sort by id’s


//SOLUTION

let arr4 = [
    {
        id: 4, name: "abc",
    },
    {
        id: 10, name: "ab2",
    },
    {
        id: 5, name: "ab3",
    },
    {
        id: 6, name: "abc5",
    },
]

arr4.sort((a,b)=>a.id - b.id)

console.log("sorted object according to id: " ,arr4);

//ENDS