//Import readline for interactive user input/output 
const readline = require('readline')

//Create a readline interface for the CLI 
const rl = readline.createInterface({
    input: process.stdin, // Use standard input (keyboard)
    output: process.stdout // Use standard output (keyboard)
})

// Define character sets as srtings
const LOWER = 'abcdefghijklmnopqrstuvwxyz'// Lowercase letters
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // Uppercase letters
const NUMBERS = '0123456789' // Digits 0-9
const SYMBOLS = '!@#$%^&*()-_=+[]{};:,.<>?' // Common symbols

// Function to prompt user for password options and generate password 
function promptOptions() {
    rl.question('Enter password length (e.g. 12): ', lenInput => {
        const length = parseInt(lenInput) // Convert input to integer
        // Validate length (must be at least 4 characters)
        if(isNaN(length) || length < 4) {
            console.log('Please enter a number greater than or equal to 4.')
            return promptOptions() // Prompt again on invalid input
        }
        
    })
}