// Assignment Code
var generateBtn = document.querySelector("#generate");

function getPasswordOptions () {
  var pwdLength = parseInt(prompt("How long would you like your password to be"))
  
  if (pwdLength < 8 || pwdLength > 128) { 
    alert("Password must be between 8 and 128 characters")
    return
}
  var numbers = confirm("Would you like to include numbers")
  console.log(numbers)

  var uppercase = confirm("You must include one uppercase letter")

  var lowercase = confirm("You must include one lowercase letter")

  var specialcharacter = confirm("You must use one special character")
  if (){
    alert("Must be ! @ # $ % & *")
  }
}
getPasswordOptions()

// Write password to the #password input
function generatePassword () {

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);