const pswLength = document.getElementById('pass-length');
const lowercaseLetter = document.getElementById('chars1');
const uppercaseLetter = document.getElementById('chars2');
const symbols = document.getElementById('chars3');
const generateBtn = document.getElementById('generate');
const pswContainer = document.getElementById('password-container');

const getCheckbox = () => {
    let chars = '';

    if(lowercaseLetter.checked) {
        chars = chars + 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercaseLetter.checked) {
        chars = chars + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (symbols.checked) {
        chars = chars + '!@#$%&*?<>';
    }

    return chars;
}

const getRandomInt = () => {
    const chars = getCheckbox();
    const max = chars.length;
    console.log(Math.floor(Math.random()*max));
}

const generatePsw = (e) => {
    e.preventDefault();


    const psw = Math.random()

}

getRandomInt(pswLength.value);
generateBtn.addEventListener('click', generatePsw);