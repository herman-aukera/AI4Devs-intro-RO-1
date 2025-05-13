# Prompt Used

You are a frontend AI coding assistant. Help me generate a small web project with clean code and modular separation.

**Task**: Build a minimal client-side app that reverses a string input by the user.

### Files required:
1. `index.html`:
   - Input field for typing a string.
   - A `<button>` labeled "Reverse" (only visible when input length > 3).
   - A `<div>` that displays the reversed string.
   - Link to external `script.js`.
   - Minimal styling inline OR Tailwind-friendly classNames (optional).

2. `script.js`:
   - Add event listener to the input to toggle the button based on length.
   - When button is clicked:
     - Reverse the input string and show it inside the `<div>`.
     - Clear previous result on new input.
   - Use named functions.
   - Use modern APIs (`textContent`, avoid deprecated `execCommand`).

3. `README.md`:
   - Overview of what the app does.
   - Technologies used.
   - How to run it locally.
   - Notes (e.g. time spent, assistant used).

4. `prompts.md`:
   - Include this exact prompt and note iterations if any.

### Output:
Respond with all files in copy-pasteable format (clearly delimited).
Use clear comments and keep the JS readable.

Strict constraints:
- Vanilla JS only.
- No frameworks or build tools.
- Modular, readable, and testable code.

---
