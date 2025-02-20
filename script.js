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

  // Ensure password length is between 8 and 32
  let length = Math.min(Math.max(parseInt(passLength.value) || 8, 8), 32);

  const charSet = specCharBox.checked ? withSpecCharacters : characters;

  for (let i = 0; i < length; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }

  passwordField.value = password;
});

// Copy Button using Clipboard API
copyBtn.addEventListener('click', async () => {
  if (!passwordField.value) {
    alert('No password to copy!');
    return;
  }

  try {
    await navigator.clipboard.writeText(passwordField.value);
    alert('Password copied to clipboard!');
  } catch (err) {
    alert('Failed to copy password.');
    console.error('Error copying to clipboard:', err);
  }
});
