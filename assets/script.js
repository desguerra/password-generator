// Assignment code here //

/* LOWER, UPPER, NUMERIC, AND SPECIAL CHARACTER FUNCTIONS */
function getLower() {
    var randomGen = Math.floor(Math.random() * 26 + 97);
    var res = String.fromCharCode(randomGen);
    return res;
};

function getUpper() {
    var randomGen = Math.floor(Math.random() * 26 + 65);
    var res = String.fromCharCode(randomGen);
    return res;
};

function getNumeric() {
    var randomGen = Math.floor(Math.random() * 10 + 48);
    var res = String.fromCharCode(randomGen);
    return res;
};

function getSpecialChar() {
    // list of the 33 special characters according to OWASP
    // https://owasp.org/www-community/password-special-characters
    var specialCharList = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    
    var randomGen = Math.floor(Math.random() * 33);
    var res = specialCharList[randomGen];
    return res;
};

/* GENERATE PASSWORD FUNCTION */
function generatePassword() {
    // make new variable for generated password
    var newPassword = "";

    // if length of pw is between 8 and 128 chars, and if only numerics were entered, continue
    var charLimit = window.prompt("How many characters would you like your password to contain?");
    parsedCharLimit = parseInt(charLimit);

    if ((parsedCharLimit > 7 && parsedCharLimit < 129) && (charLimit == parsedCharLimit)) {
        // is lowercase?
        var isLower = window.confirm("Click OK if you would like to include lowercase characters.");

        // is uppercase?
        var isUpper = window.confirm("Click OK if you would like to include uppercase characters.");

        // is numeric?
        var isNumeric = window.confirm("Click OK if you would like to include numeric characters.");

        // is special characters?
        var isSpecialChar = window.confirm("Click OK if you would like to include special characters.");

        // if NONE OF THE ABOVE, then try again (loop back)
        if (!isLower && !isUpper && !isNumeric && !isSpecialChar) {
            window.alert("Must select at least once character type. Please try again.");
            return newPassword;
        }
        else { // else, return a generated password that matches selected criteria
            
            for (var i = 0; i < parsedCharLimit; i++) {

                // randomize the characters that go into the new pw, given the selected criteria
                var random = Math.floor(Math.random() * 4 + 1);
                if (random === 1 && isLower) {
                    newPassword += getLower();
                }
                else if (random === 2 && isUpper) {
                    newPassword += getUpper();
                }
                else if (random === 3 && isNumeric) {
                    newPassword += getNumeric();
                }
                else if (random === 4 && isSpecialChar) {
                    newPassword += getSpecialChar();
                }
                else {
                    // if none of the above, then loop again
                    parsedCharLimit += 1;
                }
            };

            return newPassword;
        }
    }
    else { // else, try again
        window.alert("Sorry! Password must be between 8 - 128 characters. Please enter a valid password length.")
        return newPassword;
    }
};
/* END OF GENERATE PASSWORD FUNCTION */


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
