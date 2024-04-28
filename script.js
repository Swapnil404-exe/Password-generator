const generateBtn = document.getElementById('generate');
const lengthInput = document.getElementById('length');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const passwordTextarea = document.getElementById('password');
const lengthValue = document.getElementById('lengthValue');
const copyBtn = document.getElementById('copy');

lengthInput.addEventListener('input', () => {
  lengthValue.innerText = lengthInput.value;
});

generateBtn.addEventListener('click', () => {
  const length = +lengthInput.value;
  const hasUppercase = uppercaseInput.checked;
  const hasLowercase = lowercaseInput.checked;
  const hasSymbols = symbolInput.checked;
  const hasNumbers = numberInput.checked;
  
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = '';
  if (hasUppercase) chars += uppercaseChars;
  if (hasLowercase) chars += lowercaseChars;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;
  
  if(!hasLowercase && !hasNumbers && !hasSymbols && !hasUppercase) {
    alert('Choose atleast one option.');
    return;
  }
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordTextarea.value = password;
});

copyBtn.addEventListener('click', () => {
  if (passwordTextarea.value.trim() === '') {
      alert('Generate a password first');
  } else {
      passwordTextarea.select();
      document.execCommand('copy');
      alert('Password copied to clipboard');
  }
});