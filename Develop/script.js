// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//write function here

// To be accomplished:
// 1. Click a button to generate password I get prompts
// 2. Select which to include lowercase, uppercase, numeric and/or special characters
// 3. Choose length of pass word between 8-128 characters
// 4. Password should have atleast one character type selected
// 5. Display password

// Steps to get there:
// 1. Create buckets of each lowercase, uppercase, numeric, special characters
// 2. Send prompts and taken response
// 3. Based on response create a bucket of prompts selected
// 4. create and array of lengths specified.
// 5. Check if array has each prompt specified atleast once in array
// 6. If not, replace a random element with a random of the missing type

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword() {

  password.length = prompt("Please enter length of password between 8 and 128 characters", "12"); //throw an error if not between 8 and 128
  
  console.log(password.length);

  var includeLowerCase = confirm("Do you want to include lower case characters?");
  var includeUpperCase = confirm("Do you want to include upper case characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecialCharacters = confirm("Do you want to include special characters?");

  console.log(includeLowerCase);
  console.log(includeUpperCase);
  console.log(includeNumeric);
  console.log(includeSpecialCharacters);

  var superSet;
  var temp = [];

  if (includeLowerCase && includeUpperCase && includeNumeric && includeSpecialCharacters) {
    
    superSet = lowerCase.concat(upperCase, numeric, specialCharacters);
 
  } else if (includeLowerCase && includeUpperCase && includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase.concat(upperCase, numeric);

  } else if (includeLowerCase && includeUpperCase && !includeNumeric && includeSpecialCharacters) {

    superSet = lowerCase.concat(upperCase, specialCharacters);

  } else if (includeLowerCase && includeUpperCase && !includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase.concat(upperCase);

  } else if (includeLowerCase && !includeUpperCase && includeNumeric && includeSpecialCharacters) {

    superSet = lowerCase.concat(numeric, specialCharacters);

  } else if (includeLowerCase && !includeUpperCase && includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase.concat(numeric);

  } else if (includeLowerCase && !includeUpperCase && !includeNumeric && includeSpecialCharacters) {

    superSet = lowerCase.concat(numeric, specialCharacters);

  } else if (includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase;

  }   if (!includeLowerCase && includeUpperCase && includeNumeric && includeSpecialCharacters) {
    
    superSet = upperCase.concat(numeric, specialCharacters);

  }   if (!includeLowerCase && includeUpperCase && includeNumeric && !includeSpecialCharacters) {
    
    superSet = upperCase.concat(numeric);

  }   if (!includeLowerCase && includeUpperCase && !includeNumeric && includeSpecialCharacters) {
    
    superSet = upperCase.concat(specialCharacters);

  }   if (!includeLowerCase && includeUpperCase && !includeNumeric && !includeSpecialCharacters) {
    
    superSet = upperCase;

  }   if (!includeLowerCase && !includeUpperCase && includeNumeric && includeSpecialCharacters) {
    
    superSet = numeric.concat(specialCharacters);

  }   if (!includeLowerCase && !includeUpperCase && includeNumeric && !includeSpecialCharacters) {
    
    superSet = numeric;

  }   if (!includeLowerCase && !includeUpperCase && !includeNumeric && includeSpecialCharacters) {
    
    superSet = specialCharacters;

  }   if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacters) {
    
    superSet = null; //how do i print a password when they select no characters??

  }

  for (var i = 0; i < password.length; i++) {
    temp[i] = superSet[Math.floor(Math.random() * superSet.length)];
    console.log(temp[i]); //how the freak do i ensure there is one type of character always?
  }

  password = temp.toString();
  console.log(password);
  return(password);

}