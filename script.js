// Grab generate ID from HTML

var generateBtn = document.querySelector("#generate");

// Array to use for collecting combined character arrays

var charBank = []

// Character style types and default values

var charstyleLower = false;
var charstyleNumbers = false;
var charstyleSpecial = false;
var charstyleUpper = false;

// Variables for capturing number string and generated password string

var lengthPrompt = "";
var passwordFinal = "";

// Variables for character syyle arrays

var numberChars = [1,2,3,4,5,6,7,8,9,0]
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y","Z"];
var specialChars = ["!", "@", "#", "$", "^", "&", "%", "*", "(", ")", "+", "="]

// Upon "generate password" button click, function will begin

generateBtn.addEventListener("click", function() {

  // method to reset previously generated password

  var passwordFinal = "";

  // Prompt to ask how many characters password should be. Answer saved once completed correctly. 

  var lengthPrompt = prompt("How long would you like to make the password? It must be at least 8 characters and no more than 128 characters.");
  lengthPrompt;

  console.log(lengthPrompt)

    // If length outside of parameters, prompt with invalid message and ask again. Answer stored in variable. 

    while(lengthPrompt < 8 || lengthPrompt > 125) {
      alert("Invalid character entry, the total character length must be between 8 and 128 characters!");
      var lengthPrompt = prompt("How long would you like to make the password? It must be at least 8 characters and no more than 128 characters.");
      lengthPrompt;
      }
    
    // Questions confirming what character styles to include in password. Answers stored in variable. 

  var charstyleLower = confirm("Would you like to include lowercase characters? Click OK to confirm, otherwise cancel to continue. At least one character type is required.");
  charstyleLower;
  console.log(charstyleLower)

  var charstyleUpper = confirm("Would you like to include UPPERCASE characters? Click OK to confirm or cancel to continue. At least one character type is required.");
  charstyleUpper;
  console.log(charstyleUpper)

  var charstyleNumbers = confirm("Would you like to include number characters? Click OK to confirm or cancel to continue. At least one character type is required.");
  charstyleNumbers;
  console.log(charstyleNumbers)

  var charstyleSpecial = confirm("Would you like to include special characters? Click OK to confirm or cancel to continue. At least one character type is required.");
  charstyleSpecial;
  console.log(charstyleSpecial);

   // Loop to repeat character style questions if none originally selected. Answers stored in variable.  
   
    while(charstyleLower == false && charstyleUpper == false && charstyleNumbers == false && charstyleSpecial == false) {
      alert ("You must select at least one character style. Try again!");
      var charstyleLower = confirm("Would you like to include lowercase characters? Click OK to confirm, otherwise cancel to continue. At least one character type is required.");
      charstyleLower;
      console.log(charstyleLower)

      var charstyleUpper = confirm("Would you like to include UPPERCASE characters? Click OK to confirm or cancel to continue. At least one character type is required.");
      charstyleUpper;
      console.log(charstyleUpper)

      var charstyleNumbers = confirm("Would you like to include number characters? Click OK to confirm or cancel to continue. At least one character type is required.");
      charstyleNumbers;
      console.log(charstyleNumbers)

      var charstyleSpecial = confirm("Would you like to include special characters? Click OK to confirm or cancel to continue. At least one character type is required.");
      charstyleSpecial;
      console.log(charstyleSpecial);
      }

      // if character style is true, it is added to the collection variable "charBank". If false, charbank remains the same until all characters are gone through.  

      if (charstyleLower == true) {
        charBank = charBank.concat(lowerChars)
        console.log(charBank);
      }

      if (charstyleNumbers == true) {
        charBank = charBank.concat(numberChars)
        console.log(charBank);
      }

      if (charstyleUpper == true) {
        charBank = charBank.concat(upperChars)
        console.log(charBank);
      }

      if (charstyleUpper == true) {
        charBank = charBank.concat(specialChars)
        console.log(charBank)
      }
      
      // randomly generate password based on lengthPrompt and charBank.   


      for (var i = 0; i < lengthPrompt; i++) {
        passwordFinal = passwordFinal + charBank[Math.floor(Math.random() * charBank.length)];
    
        // Push password to html   

        document.querySelector("#password").textContent = passwordFinal;
        console.log(passwordFinal);
      }

      
    })

      