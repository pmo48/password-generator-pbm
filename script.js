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


// a.) Clicking generate button launches prompt

// b.) Prompt - "How long would you like the passowrd? It must be at least 8 characters and no more than 128 characters.""

// c.) If character length is <8 or >128, prompt "Invalid character entry, the total character length must be between 8 and 128 characters,inclusive". If invalid, return to b. If valid, move to d.

// d.) Prompt - "Would you like to include lowercase characters? Click OK to confirm, otherwise cancel to continue. At least one character type is required. " Store answer. 

// e.) Prompt - "Would you like to include UPPERCASE characters? Click OK to confirm or cancel to continue. At least one character type is required. " Store answer. 

// f.) Prompt - "Would you like to include numbers? Click OK to confirm or cancel to continue. At least one character type is required. " Store answer. 

// g.) Prompt - "Would you like to include special characters? Click OK to confirm or cancel to continue. At least one character type is required." Store answer. 

// h.) If d-g confirmations are <1, prompt "You must select at least 1 character type" and return to d.). 

// i.) If d-g confirmations are >1, collect entries, generate password and update textbox with password
