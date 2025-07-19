const input = document.querySelector('#controls input[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100 || isNaN(amount)) return;

  destroyBoxes();
  createBoxes(amount);
  input.value = '';
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let size = 30;
  const fragments = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';
    fragments.appendChild(div);
    size += 10;
  }

  boxes.appendChild(fragments);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
