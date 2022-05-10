const generateBtn = document.getElementById('generate');
const pswContainer = document.getElementById('password-container');

const generatePsw = (e) => {
    e.preventDefault();
    console.log('password');
    pswContainer.innerText = 'Password';
}


generateBtn.addEventListener('click', generatePsw);