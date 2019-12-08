// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER

//main generate password method
function generatePassword() {

  var pwdlen = prompt("Length (must be between 8 and 128 characters)", 8);
  console.log(pwdlen);
  
  var wantSplchrs = confirm("Do you want to include special characters?");
  console.log("splchrs "+wantSplchrs);
  
  var wantLowerchrs = confirm("Do you want to include Lower characters?");
  console.log("lower "+wantLowerchrs);
  
  var wantUpperchrs = confirm("Do you want to include Upper characters?");
  console.log("upper "+wantUpperchrs);
  
  //" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


}