const readline = require('readline')

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{};:,.<>?';

function promptLength() {
    rl.question('Enter password length (e.g. 12): ', lenInput => {
        const length = parseInt(lenInput); // Convert input to integer
        // Validate length (must be at least 4 characters)
        if(isNaN(length) || length < 4) {
            console.log('Please enter a number greater than or equal to 4.');
            return promptOptions(); // Prompt again on invalid input
        }
        // Continue to the next prompt if valid 
        promptYN('Include uppercase letters? (y/n): ', includeUpper => {
            promptYN('Include numbers? (y/n): ', includeNumbers => {
                promptYN('Include symbols (y/n): ', includeSymbols => {
                    generatePassword(length, includeUpper, includeNumbers, includeSymbols)
                })
            })
        })
    })
}

function promptYN(question, callback) {
    rl.question(question, answer => {
        const ans = answer.trim().toLowerCase()
        if(ans === 'y' || ans === 'yes') {
            callback(true)
        } else if( ans === 'n'|| ans === 'no'){
            callback(false)
        } else {
            console.log('Please type y or n.')
            promptYN(question, callback)
        }
    })
}

function generatePassword(length, upper, num, sym) {
    let chars = LOWER
    if(upper) chars += UPPER
    if(num) chars += NUMBERS
    if(sym) chars += SYMBOLS

    if(chars.length === 0) {
        console.log('No character sets selected. Cannot generate password')
        return rl.close()
    }
    let password = ''
    for(let i = 0; i < length; i++) {
        const idx = Math.floor(Math.random() * chars.length)
        password += chars[idx]
    }
    console.log('\nYour generated password:\n' + password)
    rl.close()
}

console.log('=== Password Generator ===')
promptLength()