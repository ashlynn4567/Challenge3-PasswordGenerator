// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------1. DEFINING VARIABLES //
// ----------------------------------------------------------2. GETTING INPUT FROM THE USER AND STORING IT AS A VARIABLE //
// -----------------------------------------------------3. RANDOMLY GENERATING A PASSWORD CHARACTERS BASED ON USER INPUT //
// ------------------------------------------------------------------------4. WRITING PASSWORD ON THE PAGE FOR USER VIEW //
// -----------------------------------------------------------------5. CLICK EVENT LISTENER TO SET THE PROGRAM IN MOTION //
// --------------------------------------------------------------------------------------------------------------------- //




// 1. DEFINING VARIABLES------------------------------------------------------------------------------------------------ //
// defining passwordType object to hold user input values for password type
var passwordType = {};

// defining passwordNumChars object to hold user input values for number of characters
var passwordNumChars;

// set a variable to track if the user has entered yes to at least one character type
var oneType = false;

// Nested array for possible password characters
var charSet = [  
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], 
  [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", 
  "^", "_", "`", "{", "|", "}", "~"]
];

// assign an empty array for which to add user character set
var newPasswordChars = [];

// assign a variable to hold the generated password
var newPassword = ""
// END VARIABLE SECTION------------------------------------------------------------------------------------------------- //




// 2. GETTING USER INPUT AND STORING IT AS A VARIABLE------------------------------------------------------------------- //
// function to test whether that character type should be included into password generation
function includeCharacterType(value) {
  if (value == "Y" || value == "y") {
    oneType = true;
  };
};

// function to display an error message if the user doesn't answer yes to at least one character type
function errorMessage(value, prompt) {
  while (value === "" || value === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    value = window.prompt(prompt);
  };
};

// function asking user to input different types of character specifications
function getPasswordType() {
  while (oneType === false) {
    // lowercase? (yes or no)
    var lowerCaseLettersPrompt = "Would you like to include lowercase letters? Type Y for YES or N for NO.";
    passwordType.lower = prompt(lowerCaseLettersPrompt);

    includeCharacterType(passwordType.lower);
    errorMessage(passwordType.lower, lowerCaseLettersPrompt);

    // uppercase? (yes or no)
    var upperCaseLettersPrompt = "Would you like to include uppercase letters? Type Y for YES or N for NO.";
    passwordType.upper = prompt(upperCaseLettersPrompt);

    includeCharacterType(passwordType.upper);
    errorMessage(passwordType.upper, upperCaseLettersPrompt);

    // numbers? (yes or no)
    var numbersPrompt = "Would you like to include numerical characters? Type Y for YES or N for NO.";
    passwordType.number = prompt(numbersPrompt);

    includeCharacterType(passwordType.number);
    errorMessage(passwordType.number, numbersPrompt);
    
    // special characters? (yes or no)
    var specialPrompt = "Would you like to include special characters? Type Y for YES or N for NO.";
    passwordType.special = prompt(specialPrompt);

    includeCharacterType(passwordType.special);
    errorMessage(passwordType.special, specialPrompt);

    // alert user to enter at least one Y value if they haven't already done so
    if (oneType === false) {
      window.alert("You must enter Y for YES to at least one character type.");
    };
  };
};

// function asking user to input number of characters 
function getPasswordNumChars() {
  // how many characters? (8 to 128)
  var numCharsPrompt = "How many characters do you need in your password? Enter a number from 8 to 128.";
  passwordNumChars = parseInt(prompt(numCharsPrompt));

  // make sure user didn't enter a string 
  if (isNaN(passwordNumChars)) {
    window.alert("You need to provide a valid answer! Please try again.");
    passwordNumChars = parseInt(prompt(numCharsPrompt));
  };
  
  // while loop to display an error message if the user doesn't enter a number from 8 to 128 for numChars
  while (passwordNumChars < 8 && passwordNumChars > 128) {
    window.alert("You must enter a number from 8 to 128! Please try again.");
    passwordNumChars = parseInt(window.prompt(numCharsPrompt));
  };

  errorMessage(passwordNumChars, numCharsPrompt);
};

// run all password specification functions
function getPasswordSpecs() {
  getPasswordType();
  getPasswordNumChars();
  console.log(passwordType);
  console.log(passwordNumChars);

  generatePassword();
};
// END USER INPUT SECTION----------------------------------------------------------------------------------------------- //




// 3. RANDOMLY GENERATING A PASSWORD CHARACTERS BASED ON USER INPUT----------------------------------------------------- //
//take into account which character types were selected
function includePasswordType() {
  if (passwordType.lower === "Y" || passwordType.lower === "y") {
    newPasswordChars.push(...charSet[0].slice(0));
  };
  if (passwordType.upper === "Y" || passwordType.upper === "y") {
    newPasswordChars.push(...charSet[1].slice(0));
  };
  if (passwordType.number === "Y" || passwordType.number === "y") {
    newPasswordChars.push(...charSet[2].slice(0));
  };
  if (passwordType.special === "Y" || passwordType.special === "y") {
    newPasswordChars.push(...charSet[3].slice(0));
  };
  console.log(newPasswordChars);
};

// //use math.random to generate password
function createPassword () {
  // until the number of characters = user input number of characters, add a randomly generated character
  for (i=0; i < passwordNumChars; i++) {
    newPassword += newPasswordChars[Math.floor(Math.random() * passwordNumChars)];
    console.log(newPassword);
  };
  return newPassword;
};

// run all password generation functions
function generatePassword() {
  includePasswordType();
  createPassword();
  return newPassword;
};
// END PASSWORD GENERATION SECTION-------------------------------------------------------------------------------------- //




// 4. WRITING PASSWORD ON THE PAGE FOR USER VIEW------------------------------------------------------------------------ //
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};
// END WRITE PASSWORD TO PAGE SECTION----------------------------------------------------------------------------------- //




// 5. CLICK EVENT LISTENER TO SET THE PROGRAM IN MOTION----------------------------------------------------------------- //
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordSpecs);
// END CLICK EVENT LISTENER SECTION------------------------------------------------------------------------------------- //
