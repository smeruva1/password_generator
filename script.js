// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyBtnId");
var password = ''

// Write password to the #password input
function writePassword() {
  // copyBtn.disabled = true;
  copyBtn.blur();
  password = generatePassword();

  console.log("-----$$$$$-----");
  console.log(password);
  //console.log("-----$$$$$-----");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //generateBtn.blur();
  // copyBtn.disabled = false;
  //copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
  console.log("hi from copyto clipboard");
  // console.log(password);
  // var copyText = password;

  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy");
  console.log(copyText.value);
  alert("Copied the text: " + copyText.value);
}

//main generate password method
function generatePassword() {

  //Get password criteria from user
  var pwdlen = prompt("Length (must be between 8 and 128 characters)", 8);
  //console.log(pwdlen);
  //console.log(isNaN(pwdlen));
  //console.log('==============================111====');

  //if its not a number ask for number
  while (isNaN(pwdlen) || pwdlen < 8 || pwdlen > 128) {
    alert("Please enter a valid number!");
    pwdlen = prompt("Length (must be between 8 and 128 characters)", 8);
    //console.log(pwdlen);
    //console.log(isNaN(pwdlen));
    //console.log('============================222======');

  }

  var charcnt = 0;

  do {
    var wantSplchrs = confirm("Do you want to include special characters?");
    console.log("splchrs " + wantSplchrs);
    if (wantSplchrs) {
      charcnt++;
      console.log(charcnt);
    }
    var wantNumbers = confirm("Do you want to include numbers?");
    console.log("Numbers " + wantNumbers);
    if (wantNumbers) {
      charcnt++;
      console.log(charcnt);
    }

    var wantLowerchrs = confirm("Do you want to include Lower characters?");
    console.log("lower " + wantLowerchrs);
    if (wantLowerchrs) {
      charcnt++;
      console.log(charcnt);
    }

    var wantUpperchrs = confirm("Do you want to include Upper characters?");
    console.log("upper " + wantUpperchrs);

    if (wantUpperchrs) {
      charcnt++;
      console.log(charcnt);
    }

  } while (charcnt < 1);
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

      var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
      console.log(ArraySpecialChrs.length);
      console.log("What Array number are we picking: " + randArrayNo);
      console.log(ArraySpecialChrs[randArrayNo]);
      ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
      console.log(ArrayPwd);

      console.log("----------------");

    }
  }


  //Check 2 of 15 possibility
  if (wantSplchrs === false && wantNumbers === true && wantLowerchrs === false && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {
      var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
      ArrayPwd[i] = ArrayNumbers[randArrayNo];

    }
  }


  //Check 3 of 15 possibility
  if (wantSplchrs === false && wantNumbers === false && wantLowerchrs === true && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {
      var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
      ArrayPwd[i] = ArrayLowerChrs[randArrayNo];

    }
  }


  //Check 4 of 15 possibility
  if (wantSplchrs === false && wantNumbers === false && wantLowerchrs === false && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {
      var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
      ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

    }
  }

  //Check 5 of 15 possibility
  if (wantSplchrs === true && wantNumbers === true && wantLowerchrs === false && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are two arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 2);
      console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        console.log(ArraySpecialChrs.length);
        console.log("What Array number are we picking: " + randArrayNo);
        console.log(ArraySpecialChrs[randArrayNo]);
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
        console.log(ArrayPwd);

        console.log("----------------");
      } else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        console.log(ArrayNumbers.length);
        console.log("What Array number are we picking: " + randArrayNo);
        console.log(ArrayNumbers[randArrayNo]);
        ArrayPwd[i] = ArrayNumbers[randArrayNo];
        console.log(ArrayPwd);

        console.log("----------------");

      }

    }
  }

  //Check 6 of 15 possibility
  if (wantSplchrs === true && wantNumbers === false && wantLowerchrs === true && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are two arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 2);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];

      } else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];
      }

    }
  }

  //Check 7 of 15 possibility
  if (wantSplchrs === true && wantNumbers === false && wantLowerchrs === false && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are two arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 2);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];

      } else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }

  //Check 8 of 15 possibility
  if (wantSplchrs === false && wantNumbers === true && wantLowerchrs === true && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are two arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 2);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        ArrayPwd[i] = ArrayNumbers[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];

      }

    }
  }

  //Check 9 of 15 possibility
  if (wantSplchrs === false && wantNumbers === true && wantLowerchrs === false && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are two arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 2);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        ArrayPwd[i] = ArrayNumbers[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }

  //Check 10 of 15 possibility
  if (wantSplchrs === false && wantNumbers === false && wantLowerchrs === true && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are two arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 2);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }

  //Check 11 of 15 possibility
  if (wantSplchrs === true && wantNumbers === true && wantLowerchrs === true && wantUpperchrs === false) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are three arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 3);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        ArrayPwd[i] = ArrayNumbers[randArrayNo];

      } else if (randArraypickerNo === 3) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];

      }

    }
  }

  //Check 12 of 15 possibility
  if (wantSplchrs === true && wantNumbers === true && wantLowerchrs === false && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are three arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 3);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        ArrayPwd[i] = ArrayNumbers[randArrayNo];

      } else if (randArraypickerNo === 3) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }

  //Check 13 of 15 possibility
  if (wantSplchrs === true && wantNumbers === false && wantLowerchrs === true && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are three arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 3);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];

      } else if (randArraypickerNo === 3) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }

  //Check 14 of 15 possibility
  if (wantSplchrs === false && wantNumbers === true && wantLowerchrs === true && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are three arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 3);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        ArrayPwd[i] = ArrayNumbers[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];

      } else if (randArraypickerNo === 3) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }


  //Check 15 of 15 possibility
  if (wantSplchrs === true && wantNumbers === true && wantLowerchrs === true && wantUpperchrs === true) {
    for (var i = 0; i < pwdlen; i++) {

      // As there are three arrays, generate a random number to pick the array
      var randArraypickerNo = Math.ceil(Math.random() * 4);
      //console.log(randArraypickerNo);

      if (randArraypickerNo === 1) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArraySpecialChrs.length - 1));
        ArrayPwd[i] = ArraySpecialChrs[randArrayNo];
      }
      else if (randArraypickerNo === 2) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayNumbers.length - 1));
        ArrayPwd[i] = ArrayNumbers[randArrayNo];

      } else if (randArraypickerNo === 3) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayLowerChrs.length - 1));
        ArrayPwd[i] = ArrayLowerChrs[randArrayNo];

      } else if (randArraypickerNo === 4) {
        //Variable to get a random index
        var randArrayNo = Math.ceil(Math.random() * (ArrayUpperChrs.length - 1));
        ArrayPwd[i] = ArrayUpperChrs[randArrayNo];

      }

    }
  }


  //Concatinate the pwd and return
  Passwordfinal = "";
  for (var i = 0; i < ArrayPwd.length; i++) {
    Passwordfinal = Passwordfinal + ArrayPwd[i];

  }

  console.log(Passwordfinal);
  return Passwordfinal;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);