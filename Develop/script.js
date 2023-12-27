// Create empty array for the number of digits of the password
// If statement to define numnber of digits in the password. It has to be a number between 8 and 128
// Prompt the user to include or not: lowercase letters, uppercase letters, numbers, and special characters in the password
// Create arrays for lowercase letters, uppercase letters, numbers, and special characters
// Create an empty array to store user selection
// Add user choices to the empty array with the concat() method
// Create a password variable as an empty string
// For loop to add as many random digits as stored in the variable numDigits and according to the preference of the user for lowercase letters, uppercase letters, numbers, and special characters



// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)






let numDigits = []

// Function to generate the Password which must have a number of digits between 8 and 128
function generatePassword () {
  numDigits = window.prompt ("How many digits do you want in your password?")
  if (numDigits === null) {
    return
  } else  if (numDigits < 8 || numDigits > 128) {
  window.alert("You have to select a number between 8 and 128")
  return generatePassword()
} else {
  window.alert(`I'll generate a password of ${numDigits} digits for you!`)

  // Ask the user for their preferences
  let includeLowercase = window.confirm("Include lowercase letters?")
  let includeUppercase = window.confirm("Include uppercase letters?")
  let includeNumbers = window.confirm("Include numbers?")
  let includeSpecialChars = window.confirm("Include special characters?")

  // Define arrays for different character sets
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  let numbers = "0123456789".split("")
  let specialChars = "!@#$%^&*()_+{}[]<>?".split("")
  let noSelection = ""

  // Combine arrays based on user preferences
  let allChars = []

  if (includeLowercase) {
    allChars = allChars.concat(lowercaseLetters)
  }
  if (includeUppercase) {
    allChars = allChars.concat(uppercaseLetters)
  }
  if (includeNumbers) {
    allChars = allChars.concat(numbers)
  }
  if (includeSpecialChars) {
    allChars = allChars.concat(specialChars)
  }

  // Define the case in which the user doesn't select any criteria to include the password
  if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecialChars === false) {
    window.alert("You must select at lease one criteria to generate your password")
    return
  }

  // Generate the password
  let password = ""
  for (i = 0; i < numDigits; i++) {
  let randomIndex = Math.floor(Math.random() * allChars.length)
  password += allChars[randomIndex]
  }

  return password

}

}
