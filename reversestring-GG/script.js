// script.js

/**
 * Reverses a string, handling multibyte characters.
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  return [...str].reverse().join('');
}

// DOM references
const input = document.getElementById('inputText');
const button = document.getElementById('reverseBtn');
const output = document.getElementById('outputText');

/**
 * Handles input field updates: toggle button visibility.
 */
function handleInputChange() {
  const value = input.value.trim();
  button.style.display = value.length > 3 ? 'inline-block' : 'none';
  output.textContent = ''; // clear result while typing
}

/**
 * Handles reverse logic and DOM update.
 */
function handleReverseClick() {
  const reversed = reverseString(input.value);
  output.textContent = reversed;
}

// Attach event listeners
input.addEventListener('input', handleInputChange);
button.addEventListener('click', handleReverseClick);
