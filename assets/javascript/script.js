// assignment Code
var generateBtn = document.querySelector("#generate");

// function for password generation
function generatePassword(){
  var thePassword = '';
  // ask user to enter # of characters
  var userValue = prompt("How many characters would you like the password to contain? * Number must be between 8 and 128 characters *");
  
  // loop to generate appropriate character count
  while(true){
    if (userValue < 8 || userValue > 128) {
      alert("You must choose a number between 8 and 128");
      userValue = prompt("How many characters would you like the password to contain? * Number must be between 8 and 128 characters *");
    } else {
      break;
    }
  }
  
  // confirm criteria with user
   var confirmNum = confirm("Click OK to include numbers");
   var confirmSpec = confirm("Click OK to include special characters");
   var confirmUp = confirm("Click OK to include uppercase characters");
   var confirmLow = confirm("Click OK to include lowercase characters");
  
   // functions array
   var functionsArray =[]
   if(confirmNum) {
     functionsArray.push(generateRandomNumber)
   }
   if(confirmSpec) {
     functionsArray.push(generateRandomSpecialChar)
   }
   if(confirmUp) {
     functionsArray.push(generateRandomUpperCase)
   } 
   if(confirmLow) {
     functionsArray.push(generateRandomLowerCase)
   }
  // loop for generating random characters
   for(var i = 0; i < userValue; i++) {
     // Here goes the logic for creating one random char. Will be repeated userValue times
     // randomize the functionsArray, invoke it and store what's returned in a new var then append it to "thePassword"

     var newChar = functionsArray[Math.floor(Math.random()*functionsArray.length)]()
     thePassword = thePassword + newChar 

   }
    function generateRandomNumber() {
      var numbers = "0123456789";
      var randomNum = numbers[Math.floor(Math.random()*numbers.length)]
      return randomNum
    }

    function generateRandomUpperCase() {
      var lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var randomLetUp = lettersUp[Math.floor(Math.random()*lettersUp.length)]
      return randomLetUp
    }

    function generateRandomLowerCase() {
      var lettersLow = "abcdefghijklmnopqrstuvwxyz";
      var randomLetLow = lettersLow[Math.floor(Math.random()*lettersLow.length)]
      return randomLetLow
    }

    function generateRandomSpecialChar() {
      var specialChar = "!#$-%&',*+./:;<=>?@[]^_~`";
      var randomSpecChar = specialChar[Math.floor(Math.random()*specialChar.length)]
      return randomSpecChar
    }

    return thePassword;

  }

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);