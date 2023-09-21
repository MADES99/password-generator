const capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const small = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    ];

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ];
 
const symbols = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
    ];

const copybtn = document.getElementById('copy-password1');
const copybtn2 = document.getElementById('copy-password2');
let password1El = document.getElementById('password1');
let password2El = document.getElementById('password2');
let generateEl = document.getElementById('generate');
let resetEl = document.getElementById('reset');
let firstPassword = '';
let secondPassword = '';
let passwordText = [];
let result = '';
let passwordArray = [];

function capitalLetters() {
    let randomCapital = Math.floor(Math.random() * capital.length )
    return randomCapital;
}

function smallLetters() {
    let randomSmall = Math.floor(Math.random() * small.length )
    return randomSmall;
}

function numbersOnly() {
    let randomNum = Math.floor(Math.random() * numbers.length);
    return randomNum;
}

function symbolsOnly() {
    let randomSym = Math.floor(Math.random() * symbols.length);
    return randomSym;
}



function generate6CapitalLe() {
    let capitalPass = '';
    for (let i = 0; i < 6; i++) {
      capitalPass += capital[capitalLetters()] 
    }
    return capitalPass;
}


function generate7SmallLe() {
    let smallPass = '';
    for (let i = 0; i < 7; i++) {
        smallPass += small[smallLetters()] 
    }
    return smallPass;
}


function generate7Numbers() {
    let numPass = '';
    for (let i = 0; i < 7; i++) {
        numPass += numbers[numbersOnly()]
    }
    return numPass;
}


function generate10Symbols() {
    let symPass = '';
    for (let i = 0; i < 10; i++) {
        symPass += symbols[symbolsOnly()]
    }
    return symPass;
}


function passwordVal() {
    let password = generate6CapitalLe();
    password += generate7SmallLe();   
    password += generate7Numbers();
    password += generate10Symbols();

    for (let i = 0; i < password.length; i++) {
        passwordText.push(password[i])
    }
    
   for (let i = 0; i < passwordText.length; i++) {
    let randomIndex = Math.floor(Math.random() * passwordText.length)
    result += passwordText[randomIndex];
   }

   firstPassword = result.slice(0, 15);
    secondPassword = result.slice(15, 30);
   passwordArray = [firstPassword, secondPassword]

   password1El.value = passwordArray[0];
   password2El.value = passwordArray[1];
}

generateEl.addEventListener('click', (e) => {
    passwordVal()
    result = ''

    copybtn.style.backgroundColor = '#273549'
    copybtn2.style.backgroundColor = '#273549'

} )


copybtn.addEventListener('click', () => {
    let generatedPassword = password1El.value;
    console.log(generatedPassword)
    navigator.clipboard.writeText(generatedPassword)
        .then(() => {
            console.log("Password copied to clipboard!")
            copybtn.style.backgroundColor = '#ECFDF5'
            alert('Password copied to clipboard!')
        })
        .catch((error) => {
            console.error('Failed to copy password:', error)
        })
})


copybtn2.addEventListener('click', () => {
    let generatedPassword = password2El.value;
    console.log(generatedPassword)
    navigator.clipboard.writeText(generatedPassword)
    .then(() => {
        console.log("Password copied to clipboard!")
        copybtn2.style.backgroundColor = '#ECFDF5'
        alert('Password copied to clipboard!')
    })

    .catch((error) => {
        console.error('Failed to copy password:', error)
    })
})





    




