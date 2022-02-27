// --------------------------------------------------------------------------------------------------------------------- //
// TABLE OF CONTENTS: -------------------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------------------------1. VARIABLES //
// ----------------------------------------------------------2. GETTING INPUT FROM THE USER AND STORING IT AS A VARIABLE //
// -----------------------------------------------------3. RANDOMLY GENERATING A PASSWORD CHARACTERS BASED ON USER INPUT //
// ------------------------------------------------------------------------4. WRITING PASSWORD ON THE PAGE FOR USER VIEW //
// -----------------------------------------------------------------5. CLICK EVENT LISTENER TO SET THE PROGRAM IN MOTION //
// --------------------------------------------------------------------------------------------------------------------- //



// 1. VARIABLES--------------------------------------------------------------------------------------------------------- //
// defining passwordSpecs object to hold user input values
var passwordSpecs = {};

// Nested array for possible password characters
var characterSet = [  
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
  " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", 
  "^", "_", "`", "{", "|", "}", "~"
];
// END VARIABLE SECTION------------------------------------------------------------------------------------------------- //




// 2. GETTING USER INPUT AND STORING IT AS A VARIABLE------------------------------------------------------------------- //
// function to display an error message if the user doesn't answer yes to at least one character type
function errorMessage(value, prompt) {
  while (value === "" || value === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    value = window.prompt(prompt);
  };
};

// function asking user to input different types of character specifications
function getPasswordType() {
  // set a variable to track if the user has entered yes to at least one character type
  var oneType = false;

  while (oneType === false) {
    // lowercase? (yes or no)
    var lowerCaseLettersPrompt = "Would you like to include lowercase letters? Type Y for YES or N for NO.";
    passwordSpecs.lower = prompt(lowerCaseLettersPrompt);

    if (passwordSpecs.lower == "Y" || passwordSpecs.lower == "y") {
      oneType = true;
    };
   
    errorMessage(passwordSpecs.lower, lowerCaseLettersPrompt);
    console.log(passwordSpecs.lower);

    // uppercase? (yes or no)
    var upperCaseLettersPrompt = "Would you like to include uppercase letters? Type Y for YES or N for NO.";
    passwordSpecs.upper = prompt(upperCaseLettersPrompt);

    if (passwordSpecs.upper == "y" || passwordSpecs.upper == "y") {
      oneType = true;
    };
    
    errorMessage(passwordSpecs.upper, upperCaseLettersPrompt);
    console.log(passwordSpecs.upper);

    // numbers? (yes or no)
    var numbersPrompt = "Would you like to include numerical characters? Type Y for YES or N for NO.";
    passwordSpecs.number = prompt(numbersPrompt);

    if (passwordSpecs.number == "y" || passwordSpecs.number == "y") {
      oneType = true;
    };
    
    errorMessage(passwordSpecs.number, numbersPrompt);
    console.log(passwordSpecs.number);
    
    // special characters? (yes or no)
    var specialPrompt = "Would you like to include special characters? Type Y for YES or N for NO.";
    passwordSpecs.special = prompt(specialPrompt);

    if (passwordSpecs.special == "y" || passwordSpecs.special == "y") {
      oneType = true;
    };
    
    errorMessage(passwordSpecs.special, specialPrompt);
    console.log(passwordSpecs.special);

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
  passwordSpecs.numChars = parseInt(prompt(numCharsPrompt));

  // make sure user didn't enter a string 
  if (isNaN(passwordSpecs.numChars)) {
    window.alert("You need to provide a valid answer! Please try again.");
    passwordSpecs.numChars = parseInt(prompt(numCharsPrompt));
  };

  errorMessage(passwordSpecs.numChars, numCharsPrompt);
  
  // while loop to display an error message if the user doesn't enter a number from 8 to 128 for numChars
  while (passwordSpecs.numChars < 8 && passwordSpecs.numChars > 128) {
    window.alert("You must enter a number from 8 to 128! Please try again.");
    passwordSpecs.numChars = parseInt(window.prompt(numCharsPrompt));
    };

  console.log(passwordSpecs.numChars);
};

// run all password specification functions
function getPasswordSpecs() {
  getPasswordType();
  getPasswordNumChars();
  console.log(passwordSpecs);
};
// END USER INPUT SECTION----------------------------------------------------------------------------------------------- //




// 3. RANDOMLY GENERATING A PASSWORD CHARACTERS BASED ON USER INPUT----------------------------------------------------- //
// use math.random to generate password
function generatePassword() {
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
