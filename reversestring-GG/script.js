// This script reverses a string input by the user and displays the reversed string
const input = document.getElementById('inputText');
const button = document.getElementById('reverseBtn');
const output = document.getElementById('outputText');

function reverseString(str) {
  return str.split('').reverse().join('');
}

input.addEventListener('input', () => {
  const text = input.value;
  // Show button if more than 3 characters
  button.style.display = text.length > 3 ? 'inline-block' : 'none';
  output.textContent = ''; // clear previous output until button is clicked
});

button.addEventListener('click', () => {
  const reversed = reverseString(input.value);
  output.textContent = reversed;
});