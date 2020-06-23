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

// For part 2.
const showDefinitions = () => {
  let dropdown = document.getElementById("data-types").selectedIndex;
  let definition = document.getElementById("definition");
  if(dropdown == 0) {
    definition.innerHTML = 'Boolean represents a logical entity and can have two values: true and false.';
  } else if(dropdown == 1) {
    definition.innerHTML = 'The Number type is a double-precision 64-bit binary format IEEE 754 value (numbers between -(253 − 1) and 253 − 1). In addition to representing floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN ("Not a Number").';
  } else if(dropdown == 2) {
    definition.innerHTML = 'JavaScript\'s String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.';
  } else if(dropdown == 3) {
    definition.innerHTML = 'A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return a value. A function in JavaScript is also an object.';
  } else if(dropdown == 4) {
    definition.innerHTML = 'In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value.';
  } else if(dropdown == 5) {
    definition.innerHTML = 'A variable that has not been assigned a value has the value undefined.';
  } 
}

  
// Write a JavaScript program that adds 2 numbers together. Used for part 2.
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
