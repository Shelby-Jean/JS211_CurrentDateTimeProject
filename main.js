// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date);

const displayDate = () => {
  const currentDate = new Date();
  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const numToString = (num) => num.toString();

// Write a JavaScript program to convert a string to the number.
const stringToNum = (str) => parseInt(str);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const getType = (arg) => typeof arg;

  
// Write a JavaScript program that adds 2 numbers together.
const addNums = () => {
  let num1 = parseInt(document.getElementById("first-number").value);
  let num2 = parseInt(document.getElementById("second-number").value);
  document.getElementById("display-sum").innerHTML = num1 + num2;
}

//Other function examples
// const addNums = (num1, num2) => {
//   return num1 + num2;
// }

// function addNums(num1, num2) {
//   return num1 + num2;
// }

// Write a JavaScript program that runs only when 2 things are true.
const bothTru = (a, b) => {
  if(a && b) {
    console.log('Both are TRUE');
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTru = (a, b) => {
  if(a === 3 || b === 1) {
    console.log('One of these is TRUE');
  }
}

// Write a JavaScript program that runs when both things are not true.  
const noTru = (a, b) => {
  if(a !== 1 && b !== 2) {
    console.log('Neither of these is TRUE');
  }
}


// Using pieces of the 3 above functions to make a new function for part 2.
const posOrNeg = () => {
  let a = parseInt(document.getElementById("valueA").value);
  let b = parseInt(document.getElementById("valueB").value);
  let result = document.getElementById("display-value");
  if(a >= 0 && b >= 0){
    result.innerHTML = 'Both numbers are positive.';
    } else if (a >= 0 || b >= 0) {
      result.innerHTML = 'One number is positive.';
    } else {
      result.innerHTML = 'Neither number is positive.';
    }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
