// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating arrays so the pw generator will have characters to choose when generating the password
var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = lowerAlphabet.map(element => {
  return element.toUpperCase();
})
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~', ''
// console.log(upperAlphabet);
console.log(lowerAlphabet);
alert(lowerAlphabet);
alert(upperAlphabet);
// if user answers yes to prompt, concatenate arrays together

// Write password to the #password input
function generatePassword() {
  var upperCase = confirm("Would you like to include uppercase characters in your password?");
    // if yes, concatenate array into a new array - I KNOW THERE IS A WAY I WAS TAUGHT IN OLD JS -perhaps loop through?
  var numerics = confirm("Would you like to include numbers in your password?");
  var specials = confirm("Would you like to include special characters in your password?");
}

// if upperCase == true {  
// var new_array = [ex1, ex2, ex3]

// figure out how to make the answer to a prompt being yes will make it a boolean===true


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // use JS to add to the empty html screen like shown in example in class yesterday

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);