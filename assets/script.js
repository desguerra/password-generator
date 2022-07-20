// Assignment code here

// generate password function
function generatePassword() {
    // make new variable for generated password
    var newPassword = "testing - hello, World!";

    // if length of pw is NOT between 8 and 128 char, try again (loop back)
    var charLimit = window.prompt("How many characters would you like your password to contain?");
    charLimit = parseInt(charLimit);
    if (charLimit < 8 || charLimit > 128) {
        window.alert("Sorry! Password must be between 8 - 128 characters. Please enter a valid password length.")
        generatePassword();
    }
    // else, continue

    // if lowercase
    var isLower = window.confirm("Click OK to confirm including lowercase characters.");

    // if uppercase
    var isUpper = window.confirm("Click OK to confirm including uppercase characters.");

    // if numeric
    var isNumeric = window.confirm("Click OK to confirm including numeric characters.");

    // if special characters
    var isSpecialChar = window.confirm("Click OK to confirm including special characters.");

    // if NONE OF THE ABOVE, then try again (loop back)
    if (!isLower && !isUpper && !isNumeric && !isSpecialChar) {
        window.alert("Must select at least once character type. Please try again.");
        generatePassword();
    }

    // finally, return a generated password that matches selected criteria
    return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
