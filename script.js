// script.js
const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passLength = document.getElementById('passLength');
const specCharBox = document.getElementById('specialCharBox');

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const withSpecCharacters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  // Generate Password Btn and Checkbox Selection
generateBtn.addEventListener('click', () => {
  let password = '';
  if (specCharBox.checked) {
    for (let i = 0; i < passLength.value; i++) {
      password +=
        withSpecCharacters[
          Math.floor(Math.random() * withSpecCharacters.length)
        ];
    }
  } else {
    for (let i = 0; i < passLength.value; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
  }
  passwordField.value = password;
});

// Copy Button
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(passwordField.value);
    alert('Password copied!');
  } catch (err) {
    alert('Failed to copy password.');
    console.error('Error copying to clipboard:', err);
  }
});
