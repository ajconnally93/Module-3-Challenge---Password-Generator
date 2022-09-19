// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created arrays so the pw generator will have characters to choose when generating the password
var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = lowerAlphabet.map(element => {
  return element.toUpperCase();
})
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// Write password to the #password input
function generatePassword() {
  // if user answers OK to prompt, concatenate arrays into new array which includes all possible characters for pw generator to choose from
  var lowerAlphabetConfirm = confirm("Would you like to generate a password?")
  var upperAlphabetConfirm = confirm("Would you like to include uppercase characters in your password?");
  var numericsConfirm = confirm("Would you like to include numbers in your password?");
  var specialsConfirm = confirm("Would you like to include special characters in your password?");
  var pwLengthString = prompt("How many characters do you want your password to be? Min: 8, Max: 128");
  var pwLength = parseInt(pwLengthString);


  /////////////////////////////////////
  if (lowerAlphabetConfirm) {
    var pwCharacters = lowerAlphabet
  ////////////////////////////////////  
  } if (upperAlphabetConfirm) {
    var pwCharacters = pwCharacters.push(upperAlphabet);
  } if (numericsConfirm) {
    var pwCharacters = pwCharacters.push(numerics);
  } if (specialsConfirm) {
    var pwCharacters = pwCharacters.push(specials);
}
// pwCharacters array should now include all types of characters user wants to include

////////////////////////////////////////////////////////
// This will select the random strings from the pwCharacters array, and put it into a new array called arrayResult
  function getArrayResult() {
    // pwCharacters array already exists - will include all possible characters the user wants to include in pw
    let arrayResult = [];
    for (i = 0; i < pwLength; i++) {
      arrayResult.push(pwCharacters[Math.floor(Math.random() * pwCharacters.length)]);
    };
  return arrayResult
  };
  getArrayResult()
///////////////////////////////////////////////////////
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // use JS to add to the empty html screen like shown in example in class yesterday
  ////////////////////////////////////////////////////////
  document.getElementById("password").innerHTML = passwordText
  ///////////////////////////////////////////////////////
  passwordText.value = password;


  // Test code pieces here???
  console.log(arrayResult);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);