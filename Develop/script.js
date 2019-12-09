// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  password = generatePassword();

  console.log("-----$$$$$-----");
  console.log(Password);
  console.log("-----$$$$$-----");
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

  //Get password criteria from user
  var pwdlen = prompt("Length (must be between 8 and 128 characters)", 8);
  console.log(pwdlen);

  var wantSplchrs = confirm("Do you want to include special characters?");
  console.log("splchrs " + wantSplchrs);

  var wantNumbers = confirm("Do you want to include special characters?");
  console.log("Numbers " + wantNumbers);

  var wantLowerchrs = confirm("Do you want to include Lower characters?");
  console.log("lower " + wantLowerchrs);

  var wantUpperchrs = confirm("Do you want to include Upper characters?");
  console.log("upper " + wantUpperchrs);

  //Define Arrays to hold special chrs, number and alphabets
  var ArraySpecialChrs = ['"', ' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', ';', '~'];
  console.log(ArraySpecialChrs);

  var ArrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(ArrayNumbers);

  var ArrayLowerChrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  console.log(ArrayLowerChrs);

  var ArrayUpperChrs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  console.log(ArrayUpperChrs);

  //Define a Array to store the generated password
  var ArrayPwd = [''];
  console.log(ArrayPwd);

  //Check 1 of 15 possibility
  if (wantSplchrs === true && wantNumbers === false && wantLowerchrs === false && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {
      // console.log("just i is =======>" + i);
      // console.log(ArraySpecialChrs[i]);

      // console.log("----------------");

      var randArrayNo = Math.ceil(Math.random() * ArraySpecialChrs.length);
      console.log(ArraySpecialChrs.length);
      console.log(randArrayNo);
      console.log(ArraySpecialChrs[randArrayNo]);
      ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
      console.log(ArrayPwd);

      console.log("----------------");

    }
  }

  //Concatinate the pwd and return
  var Passwordfinal = "";
  for (var i = 0; i < ArrayPwd.length; i++) {
    Passwordfinal = Passwordfinal + ArrayPwd[i];

  }

  console.log(Passwordfinal);
  return Passwordfinal;

}
