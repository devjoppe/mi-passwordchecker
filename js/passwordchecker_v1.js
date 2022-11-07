/**
 * Workshop: Password Checker
 *
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 */

// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

 const specialChars = [
    "@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
 ];

 // Funktion som hämtar in vad användaren anger i input och kontrollerar detta mot SpecialChars
const ifSpecialChars = thePassword => {
    let cNumber = 0;
    console.log('check special characters with user input', thePassword);
    for (let i = 0; i < specialChars.length; i++) {
        if (specialChars.includes(thePassword[i])) {
            cNumber++;
            console.log(cNumber);
        }
    }
    // Retunerar värdet för valdering
    passValidation(cNumber); 
}

// User form med Input
const myForm = document.querySelector('.passwordchecker');
let userInput;
let numberOfTimes;

myForm.addEventListener('submit', e => {
    e.preventDefault();
    
    userInput = myForm.checktext.value;
    numberOfTimes = ifSpecialChars(userInput);
});

// Funktion som validerar inputen
const passValidation = numberOfTimes => {
    console.log(userInput.length);
    if (userInput.length >=6 && numberOfTimes >= 2) {
        console.log("6, 2");
        console.log("Welcome to the Metaverse");
    } else if (userInput.length >= 8 && numberOfTimes >= 1) {
        console.log("8, 1");
        console.log("Welcome to the Metaverse");
    } else if (userInput.length >= 12 && userInput.includes('-')) {
        console.log("12, -");
        console.log("Welcome to the Metaverse");
    } else if (userInput.length >= 16 ) {
        console.log("16");
        console.log("Welcome to the Metaverse");
    } else {
        console.log ("Skit ner dig");
    }
}