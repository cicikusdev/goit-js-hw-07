const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const trimmed = input.value.trim();
  output.textContent = trimmed === '' ? 'Anonymous' : trimmed;
});
