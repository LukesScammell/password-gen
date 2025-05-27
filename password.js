//Import readline for interactive user input/output 
const readline = require('readline')

//Create a readline interface for the CLI 
const rl = readline.createInterface({
    input: process.stdin, // Use standard input (keyboard)
    output: process.stdout // Use standard output (keyboard)
})

// Define character sets as srtings
const LOWER = 'abcdefghijklmnopqrstuvwxyz';// Lowercase letters
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Uppercase letters
const NUMBERS = '0123456789'; // Digits 0-9
const SYMBOLS = '!@#$%^&*()-_=+[]{};:,.<>?'; // Common symbols

// Function to prompt user for password options and generate password 
function promptLength() {
    rl.question('Enter password length (e.g. 12): ', lenInput => {
        const length = parseInt(lenInput) // Convert input to integer
        // Validate length (must be at least 4 characters)
        if(isNaN(length) || length < 4) {
            console.log('Please enter a number greater than or equal to 4.')
            return promptOptions() // Prompt again on invalid input
        }
        // Ask the user if uppercase should be included
        rl.question('Include uppercase letters? (y/n): ', upperInput => {
            //Ask user if numbers are included 
            rl.question('Include numbers? (y/n): ', numInput => {
                // Ask user if symbols are included
                rl.question('Include symbols? (y/n): ', symInput => {
                    let chars = LOWER // Always include lowercase by default

                    // Add uppercase letters if selected
                    if(upperInput.trim().toLowerCase() === 'y') chars += UPPER
                    // Add numbers if selected
                    if(numInput.trim().toLowerCase() === 'y') chars += NUMBERS
                     // Add symbols if selected 
                    if(Input.trim().toLowerCase() === 'y') chars += SYMBOLS

                    // Generate the password using random selection from the character pool
                    let password = ''
                    for(let i = 0; i < length; i++) {
                        // Randomly select a character from the 'chars' string
                        const idx = Math.floor(Math.random() * chars.length)
                        password += chars[idx]
                    }
                    // Output the generated password to user 
                    console.log('\nYour generated password:\n' + password)
                    rl.close()
                })
            })
        })
    })
}