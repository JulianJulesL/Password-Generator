const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordLength = 8;

function setPasswordLength(length) {
    passwordLength = length;
}

function generatePassword() {
    passwordOne.textContent = generateRandomPassword();
    passwordTwo.textContent = generateRandomPassword();
}

function generateRandomPassword() {
    let password = '';
    let characters = allCharacters;

    if (document.getElementById("exclude-numbers").checked) {
        characters = characters.filter(char => isNaN(char) || char === " ");
    }
    if (document.getElementById("exclude-symbols").checked) {
        characters = characters.filter(char => /^[a-zA-Z0-9]*$/.test(char));
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function copyToClipboard(element) {
    const text = element.textContent;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard: ' + text);
}

