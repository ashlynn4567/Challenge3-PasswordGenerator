// ---------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: --------------------------------------------------------------------- //
// --------------------------------------------------------------------------1. lorem ipsum //
// --------------------------------------------------------------------------2. lorem ipsum //
// --------------------------------------------------------------------------3. lorem ipsum //
// ---------------------------------------------------------------------------------------- //



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// gathering user input to generate a password
function getPasswordSpecs() {
  // defining passwordSpecs object
  var passwordSpecs = {};

  // how many characters? (8 to 128)
  passwordSpecs.numChars = prompt("How many characters do you need in your password? Enter a number from 8 to 128.");
  passwordSpecs.numChars = parseInt(passwordSpecs.numChars);

  // lowercase? (yes or no)
  passwordSpecs.lower = prompt("Would you like to include lowercase letters? Type Y for YES or N for NO.");

  // uppercase? (yes or no)
  passwordSpecs.upper = prompt("Would you like to include uppercase letters? Type Y for YES or N for NO.");

  // numbers? (yes or no)
  passwordSpecs.number = prompt("Would you like to include numerical characters? Type Y for YES or N for NO.");

  // special characters? (yes or no)
  passwordSpecs.special = prompt("Would you like to include special characters? Type Y for YES or N for NO.");
};

// use math.random to generate password
function generatePassword() {
  
};
  
// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordSpecs);



















//     // entry validation
//       // if (passwordLength === "" || passwordLength === null) {
//       //   window.alert("You need to provide a valid answer! Please try again.");
//       //   return generatePassword();
//       // };

//     // password length (8 - 128 characters)
//     var getPasswordSpecs = function() {
//       window.prompt("How long do you want your password to be? Please enter a length of at least 8 characters and no more than 128 characters.");
//       console.log(getPasswordLength);
//       if (getPasswordSpecs === "y" || getPasswordSpecs === "Y") {

//       };
//     };
    
//     // // lowercase? (yes or no)
//     // var getPasswordLower = window.prompt("Would you like to include lowercase letters? Type Y for YES and N for NO.");
//     // console.log(getPasswordLower);

//     // // uppercase? (yes or no)
//     // var getPasswordUpper = window.prompt("Would you like to include uppercase letters? Type Y for YES and N for NO.");
//     // console.log(getPasswordUpper);

//     // // numbers? (yes or no)
//     // var getPasswordNumber = window.prompt("Would you like to include numeric characters? Type Y for YES and N for NO.");
//     // console.log(getPasswordNumber);

//     // // special characters? (yes or no)
//     // var getPasswordSpecial = window.prompt("Would you like to include special characters? Type Y for YES and N for NO.");
//     // console.log(getPasswordSpecial);
//   };
// };







// // Assignment code here
// var characterSet = [  
//   ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//   ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
//   [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "backslash", "]", "^", "_", "`", "{", "|", "}", "~"]
// ];

// var password = {
//   length: getPasswordLength()
//   // lowerCase: getPasswordLower,
//   // upperCase: getPasswordUpper,
//   // number: getPasswordNumber, 
//   // specialCharacter: getPasswordSpecial
// };