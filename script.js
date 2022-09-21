// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created arrays so the pw generator will have characters to choose when generating the password
var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = lowerAlphabet.map(element => {
  return element.toUpperCase();
})
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var pwCharacters = [];

// Write password to the #password input
function generatePassword() {
  // if user answers OK to prompt, concatenate arrays into new array which includes all possible characters for pw generator to choose from
  var lowerAlphabetConfirm = confirm("Would you like to generate a password?")
  var upperAlphabetConfirm = confirm("Would you like to include uppercase characters as possible characters in your password?");
  var numericsConfirm = confirm("Would you like to include numbers as possible characters in your password?");
  var specialsConfirm = confirm("Would you like to include special characters as possible characters in your password?");
  var pwLength = prompt("How many characters do you want your password to be? Min: 8, Max: 128");

 // Sets up a loop through each array element and pushes each element individually into pwCharacters
  if (lowerAlphabetConfirm) {
    for (var i = 0; i < lowerAlphabet.length; i++) {
      pwCharacters.push(lowerAlphabet[i]);
    }
  } 

  if (upperAlphabetConfirm) {
    for (var i = 0; i < upperAlphabet.length; i++) {
      pwCharacters.push(upperAlphabet[i]);
    }
  } 

  if (numericsConfirm) {
    for (var i = 0; i < numerics.length; i++) {
      pwCharacters.push(numerics[i]);
    }
  } 

  if (specialsConfirm) {
    for (var i = 0; i < specials.length; i++) {
      pwCharacters.push(specials[i]);
    }
  }
// pwCharacters array should now include all types of characters user wants to include as possible characters in the pw

  else {
    alert("You can't say no to everything! Reload the page and try again.");
  }


// This will select the random strings from the pwCharacters array, and put it into a new array called arrayResult 
function getArrayResult() {
    // pwCharacters array already exists - will include all possible characters the user wants to include in pw
    let arrayResult = [];
    for (i = 0; i < pwLength; i++) {
      arrayResult.push(pwCharacters[Math.floor(Math.random() * pwCharacters.length)]);
    };
  // finalPassword will join all elements of arrayResult (the generated password) into a singular string, which will act as the final password
  var finalPassword = arrayResult.join('');
  console.log(finalPassword);
  return finalPassword;
  };
  return getArrayResult()
}

// the variable password will = the end result of the generatePassword() function, which will = the result of the getArrayResult() function, which will equal the finalPassword string, which is confirmed to be the correct string for the generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);