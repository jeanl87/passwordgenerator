var generateBtn = document.querySelector("#generate");
var numberList = "0123456789";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz"
var specialC = "!@#$%^&*(){}[]|/?,.~`:;'";
var potentialCharacters = ""

function generatePassword() {
  var pwdLength = parseInt(
    prompt("How long would you like your password to be"));
}

  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password must be between 8 and 128 characters");
   
  }
  var numbers = confirm("Would you like to include a number?");
    if (numbers === true) {

      potentialCharacters += numberList 
    }

  var uppercase = confirm("Would you like to include an uppercase letter?");
   if (uppercase === true) {

    potentialCharacters += upper 
   }
  
  var lowercase = confirm("Would you like to include a lowercase letters?");
    if (lowercase === true) {

    potentialCharacters += lower 
  }

  var specialCharacter = confirm("Would you like to include a special character?");
   if (specialCharacter === true) {

    potentialCharacters += specialC
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 