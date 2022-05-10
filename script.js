const pswLength = document.getElementById('pass-length');
const lowercaseLetter = document.getElementById('chars1');
const uppercaseLetter = document.getElementById('chars2');
const numbers = document.getElementById('chars3');
const symbols = document.getElementById('chars4');
const generateBtn = document.getElementById('generate');
const pswContainer = document.getElementById('generated-password');

const getCheckbox = () => {
    let chars = '';

    if(lowercaseLetter.checked) {
        chars = chars + 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercaseLetter.checked) {
        chars = chars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers.checked) {
        chars = chars + '0123456789';
    }
    if (symbols.checked) {
        chars = chars + '!@#$%&*?<>';
    }

    return chars;
}

const getRandomLetter = () => {
    const chars = getCheckbox();
    const max = chars.length;
    const letter= chars[Math.floor(Math.random()*max)];
    return letter;
}

const generatePsw = () => {
    const length = pswLength.value;
    let psw = '';
    while(psw.length < length) {
        psw = psw + getRandomLetter();
    }

    return psw;
}

const displayPsw = (e) => {
    e.preventDefault();
    const psw = generatePsw();
    pswContainer.value = psw;   
}

generateBtn.addEventListener('click', displayPsw);