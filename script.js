
// The following variables will be used to tell our script.js to build for the user. 
var passLength;
var userNumber;
var userCharacter;
var userUppercase;
var userLowercase;

// The following arrays list the possible options that our user can select. They do not see these options, but we ask them if they would like them in their password using the characters general title.

// Special characters 
character = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "\:", "\;", " < ", "=", " > ", " ? ", "@", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Letters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// userInput will allow us to create a password when given input from the user (which characters they would like in their password.)
var userInput;

// This var converts letters to uppercase for the option of upper case letters in the password. 
var toUpper = function (x) {
    return x.toUpperCase();
};

// Letters 2 will be used to store the converted variables from lower case to uppercase. Letters2 was created to make the more semantic. 
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");


// This function allows the user to click on the "Generate Password" button to create their password versus the prompts automatically starting when the page opens. 
get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// generatePassword() will generate the password based on the set of conditions given to us by the user. 
function generatePassword() {

    // Prompt will ask the user how many chatacters they would like the passowrd to be. parseInt insures that the number entered by the user will be a whole number/integer.
    passLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));


    // This first 'if' statement makes the passLength() function a requried input or the user will be alerted that it needs a value.
    if (!passLength) {
        alert("This needs a value");

        // The next else if statement states that if the password length is less than 8 or greater than 128, it will remind the user of the required password length and they will have to try again.
    } else if (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Once the input for the password length is correct, our function will ask what the user wants in their password. 
        userNumber = confirm("Would you like your password to contain numbers?");
        userCharacter = confirm("Would you like your password to contain special characters?");
        userUppercase = confirm("Would you like your password to contain Uppercase letters?");
        userLowercase = confirm("Would you like your password to contain Lowercase letters?");
    };

    // This if statement will show if the user does not select any of the four options.
    if (!userCharacter && !userNumber && !userUppercase && !userLowercase) {
        userInput = alert("You must choose a criteria!");

    }
    // This else if statement will create the password if we receive the request from the user to use all characters in the password. 
    else if (userCharacter && userNumber && userUppercase && userLowercase) {

        userInput = character.concat(number, letters, letters2);
    }
    // The following else if statements give us the abilty to create a password when 3/4 options are selected by the user. 
    else if (userCharacter && userNumber && userUppercase) {
        userInput = character.concat(number, letters2);
    }
    else if (userCharacter && userNumber && userLowercase) {
        userInput = character.concat(number, letters);
    }
    else if (userCharacter && userLowercase && userUppercase) {
        userInput = character.concat(letters, letters2);
    }
    else if (userNumber && userLowercase && userUppercase) {
        userInput = number.concat(letters, letters2);
    }
    // The following else if statements give us the ability to generate a password when the user selects 2/4 the options.
    else if (userCharacter && userNumber) {
        userInput = character.concat(number);

    } else if (userCharacter && userLowercase) {
        userInput = character.concat(letters);

    } else if (userCharacter && userUppercase) {
        userInput = character.concat(letters2);
    }
    else if (userLowercase && userNumber) {
        userInput = letters.concat(number);

    } else if (userLowercase && userUppercase) {
        userInput = letters.concat(letters2);

    } else if (userNumber && userUppercase) {
        userInput = number.concat(letters2);
    }
    // The following else statements give us the ability to generate a password when only one option is selected by the user. 
    else if (userCharacter) {
        userInput = character;
    }
    else if (userNumber) {
        userInput = number;
    }
    else if (userLowercase) {
        userInput = letters;
    }

    else if (userUppercase) {
        userInput = concat(letters2);
    };

    // This variable creates an array for the length chosen by the user. 
    var password = [];

    // The following "for" statement is what actually generates a random password for the user. It uses the input given to our "userInput function" and the Math.floor & Math.random generate the password based on the user.Input.length variable.
    for (var i = 0; i < passLength; i++) {
        var pickuserInput = userInput[Math.floor(Math.random() * userInput.length)];
        password.push(pickuserInput);
    }
    // The following function will convert the password array to a string so that it can be displayed as a sting to the user. This is done by .join. 
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This function will put ps (the convereted password array) into the text box for the user see. The text.content property is used to get/set the content for the user, using the password generated in the previous else if statements. 
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);