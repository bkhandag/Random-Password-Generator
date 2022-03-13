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

//Creates an array of all lower case characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creates an array of all upper case characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Creates an array of all numeric characters
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Creates an array of all special characters
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", 
"+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]",
 "^", "_", "`", "{", "|", "}", "~"];

//Function declaration
function generatePassword() {
  
  //Get input from user regarding length of password
  var howLong;
  howLong = prompt("Please enter length of password between 8 and 128 characters", "12"); 
  console.log(howLong);

  //Validating the length of password selected 
  while (howLong < 8 || howLong > 128) {
    howLong = prompt("Please length must be between *8 and 128* characters long", "12");
  }

  //Get input from user regarding characterts to utilize in password
  var includeLowerCase = confirm("Do you want to include lower case characters?");
  var includeUpperCase = confirm("Do you want to include upper case characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecialCharacters = confirm("Do you want to include special characters?");

  //Initialize arrays used to generate password
  var superSet = [];
  var temp = [];
  var gauranteed_characters = [];

  //Contains conditions regarding the different inputs requested by user
  if (includeLowerCase && includeUpperCase && includeNumeric && includeSpecialCharacters) {
    
    superSet = lowerCase.concat(upperCase, numeric, specialCharacters);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = upperCase[Math.floor(Math.random() * upperCase.length)];
    gauranteed_characters[2] = numeric[Math.floor(Math.random() * numeric.length)];
    gauranteed_characters[3] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
 
  } else if (includeLowerCase && includeUpperCase && includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase.concat(upperCase, numeric);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = upperCase[Math.floor(Math.random() * upperCase.length)];
    gauranteed_characters[2] = numeric[Math.floor(Math.random() * numeric.length)];

  } else if (includeLowerCase && includeUpperCase && !includeNumeric && includeSpecialCharacters) {

    superSet = lowerCase.concat(upperCase, specialCharacters);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = upperCase[Math.floor(Math.random() * upperCase.length)];
    gauranteed_characters[2] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  } else if (includeLowerCase && includeUpperCase && !includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase.concat(upperCase);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = upperCase[Math.floor(Math.random() * upperCase.length)];

  } else if (includeLowerCase && !includeUpperCase && includeNumeric && includeSpecialCharacters) {

    superSet = lowerCase.concat(numeric, specialCharacters);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = numeric[Math.floor(Math.random() * numeric.length)];
    gauranteed_characters[2] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  } else if (includeLowerCase && !includeUpperCase && includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase.concat(numeric);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = numeric[Math.floor(Math.random() * numeric.length)];

  } else if (includeLowerCase && !includeUpperCase && !includeNumeric && includeSpecialCharacters) {

    superSet = lowerCase.concat(specialCharacters);
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    gauranteed_characters[1] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  } else if (includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacters) {

    superSet = lowerCase;
    gauranteed_characters[0] = lowerCase[Math.floor(Math.random() * lowerCase.length)];

  }   if (!includeLowerCase && includeUpperCase && includeNumeric && includeSpecialCharacters) {
    
    superSet = upperCase.concat(numeric, specialCharacters);
    gauranteed_characters[0] = upperCase[Math.floor(Math.random() * upperCase.length)];
    gauranteed_characters[1] = numeric[Math.floor(Math.random() * numeric.length)];
    gauranteed_characters[2] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  }   if (!includeLowerCase && includeUpperCase && includeNumeric && !includeSpecialCharacters) {
    
    superSet = upperCase.concat(numeric);
    gauranteed_characters[0] = upperCase[Math.floor(Math.random() * upperCase.length)];
    gauranteed_characters[1] = numeric[Math.floor(Math.random() * numeric.length)];

  }   if (!includeLowerCase && includeUpperCase && !includeNumeric && includeSpecialCharacters) {
    
    superSet = upperCase.concat(specialCharacters);
    gauranteed_characters[0] = upperCase[Math.floor(Math.random() * upperCase.length)];
    gauranteed_characters[1] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  }   if (!includeLowerCase && includeUpperCase && !includeNumeric && !includeSpecialCharacters) {
    
    superSet = upperCase;
    gauranteed_characters[0] = upperCase[Math.floor(Math.random() * upperCase.length)];

  }   if (!includeLowerCase && !includeUpperCase && includeNumeric && includeSpecialCharacters) {
    
    superSet = numeric.concat(specialCharacters);
    gauranteed_characters[0] = numeric[Math.floor(Math.random() * numeric.length)];
    gauranteed_characters[1] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  }   if (!includeLowerCase && !includeUpperCase && includeNumeric && !includeSpecialCharacters) {
    
    superSet = numeric;
    gauranteed_characters[0] = numeric[Math.floor(Math.random() * numeric.length)];

  }   if (!includeLowerCase && !includeUpperCase && !includeNumeric && includeSpecialCharacters) {
    
    superSet = specialCharacters;
    gauranteed_characters[0] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  }   if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacters) {

    alert("You got to choose some characters to get a response, yo! Try again.");

  }

  // Creates the password of length minus the gauranteed characters to be added.
  for (var i = 0; i < howLong - gauranteed_characters.length; i++) {
    temp[i] = superSet[Math.floor(Math.random() * superSet.length)];
    console.log(temp[i]); //how the freak do i ensure there is one type of character always?
  }  

  //Concatenating the string of gauranteed characters and temp array to ensure atleast one character of type requested
  temp = gauranteed_characters.concat(temp);

  //Converts array to string without commas between elements of array
  password = temp.join("");
  console.log(password);
  return(password); 

}
