var generateBtn = document.querySelector("#generate");
var numbers = document.querySelector["0123456789"];
var uppercase = document.querySelector["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = document.querySelector["abcdefghijklmnopqrstuvwxyz"];
var specialCharacter = document.querySelector["!@#$%^&*(){}[]|/?,.~`:;'"];

function getPasswordOptions() {
  var pwdLength = parseInt(
    prompt("How long would you like your password to be")
    
  );
  console.log(pwdLength)

  if (pwdLength < 8 || pwdLength > 128) {
    alert("Password must be between 8 and 128 characters");
   
  }
  var nums= confirm("You must include a number")
  if (nums) {
  numbers = nums
  console.log(nums)
  }
  var upper = confirm("You must include uppercase letter")
  if (upper) {
    uppercase = upper
    console.log(upper)
  }

  var lower = confirm("You must include lowercase letters")
  if (lower) {
    lowercase = lower
    console.log(lower)
  }

  var special = confirm("You must include a special character")
  if (special) {
    specialCharacter = special
  }

}
// Write password to the #password input
function generatePassword() {}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions);