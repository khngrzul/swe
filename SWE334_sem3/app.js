

//bod1
function getCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    return days[dayIndex];
  }
  
  function getCurrentTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  
    return `${hours} ${amPm} : ${minutes} : ${seconds}`;
  }

  const today = getCurrentDay();
const currentTime = getCurrentTime();

console.log(`Today is: ${today}.`);
console.log(`Current time is: ${currentTime}`);


//bod2
function getCurrentDate() {
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  const currentDate = getCurrentDate();
  console.log(`Current date is: ${currentDate}`);
  

  //bod3
  function calculateTriangleArea(side1, side2, side3) {
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
  }
  
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;

  const area = calculateTriangleArea(side1, side2, side3);
  console.log(`The area of the triangle with sides ${side1}, ${side2}, and ${side3} is: ${area}`);


  
  //bod4
  function isLeapYear(year) {
    if (year % 4 !== 0) {
      return false;
    }
  
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
  
    return true;
  }

  const yearToCheck = 2024;
  if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
  } else {
    console.log(`${yearToCheck} is not a leap year.`);
  }



  //bod5
const randomNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));


if (!isNaN(userGuess)) {
  if (userGuess === randomNumber) {
    console.log("Good Work! Your guess is correct.");
  } else {
    console.log(`Not matched. The correct number was ${randomNumber}.`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}


//bod6

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero!";
  }
}

function calculate(operation) {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);


  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers.");
    return;
  }

  
  let resultElement = document.getElementById("result");
  if (operation === 'multiply') {
    let multiplicationResult = multiply(number1, number2);
    resultElement.textContent = `The result is: ${multiplicationResult}`;
  } else if (operation === 'divide') {
    let divisionResult = divide(number1, number2);
    resultElement.textContent = `The result is: ${divisionResult}`;
  }
}

//bod7 
function isWithinRange(number) {
  const withinRangeOf100 = Math.abs(number - 100) <= 20;
  const withinRangeOf400 = Math.abs(number - 400) <= 20;

  return withinRangeOf100 || withinRangeOf400;
}


const testNumber = 85; 

if (isWithinRange(testNumber)) {
  console.log(`${testNumber} is within 20 of 100 or 400.`);
} else {
  console.log(`${testNumber} is not within 20 of 100 or 400.`);
}

//bod8
function createNewString(inputString) {
  if (inputString.length === 0) {
    return "String is empty.";
  }

  const firstCharacter = inputString.charAt(0);
  const newString = firstCharacter + inputString + firstCharacter;

  return newString;
}

const inputString = "example"; 

const resultString = createNewString(inputString);
console.log(`Original String: ${inputString}`);
console.log(`New String: ${resultString}`);

//bod9
function replaceWithNextCharacter(inputStrings) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const resultStrings = inputStrings.replace(/[a-z]/gi, (char) => {
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toLowerCase());

    if (index !== -1) {
      const nextChar = alphabet[(index + 1) % 26];
      return isUpperCase ? nextChar.toUpperCase() : nextChar;
    }

    return char; 
  });

  return resultStrings;
}


const inputStrings = "test with string"; 

const resultStrings = replaceWithNextCharacter(inputStrings);
console.log(`Original String: ${inputStrings}`);
console.log(`New String: ${resultStrings}`);

//bod10
function countVowels(givenString) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let char of givenString) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const givenString = "Hello, World!"; 

const numberOfVowels = countVowels(givenString);
console.log(`Number of vowels in "${givenString}": ${numberOfVowels}`);

//bod11
function moveLastThreeToStart(givenStrings) {
  if (givenStrings.length >= 3) {
    const lastThreeCharacters = givenStrings.slice(-3);
    const stringWithLastThreeAtStart = lastThreeCharacters + givenStrings.slice(0, -3);
    return stringWithLastThreeAtStart;
  } else {
    return "String length must be greater than or equal to three.";
  }
}

const givenStrings = "JavaScript"; 

const movedStrings = moveLastThreeToStart(givenStrings);
console.log(`Original String: ${givenStrings}`);
console.log(`Modified String: ${movedStrings}`);

//bod13
function checkNumberOrder(num1, num2, num3) {
  if (num1 < num2 && num2 < num3) {
    return "Strict mode: Increasing";
  } else if (num1 <= num2 && num2 <= num3) {
    return "Soft mode: Increasing";
  } else {
    return "Not increasing";
  }
}

const num1 = 10;
const num2 = 15;
const num3 = 31;

const result = checkNumberOrder(num1, num2, num3);
console.log(`${num1}, ${num2}, ${num3}: ${result}`);

//bod14
function processString(inputChar) {
  if (inputChar.length >= 3) {
    const firstThreeCharacters = inputChar.slice(0, 3).toLowerCase();
    const restOfTheString = inputChar.slice(3);
    return firstThreeCharacters + restOfTheString;
  } else {
    return inputChar.toUpperCase();
  }
}

const inputChar = "Example";

const resultChar = processString(inputChar);
console.log(`Original String: ${inputChar}`);
console.log(`Processed String: ${resultChar}`);










  
