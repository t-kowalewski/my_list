// DOM Elements
const addBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const addModal = document.getElementById('add-modal');
const cancelModalBtn = document.querySelector('.modal__actions')
  .firstElementChild;

// Functions
const addModalToggle = () => {
  addModal.classList.toggle('visible');
};

const backdropToggle = () => {
  backdrop.classList.toggle('visible');
};

// Event Listeners
addBtn.addEventListener('click', () => {
  addModalToggle();
  backdropToggle();
});

cancelModalBtn.addEventListener('click', () => {
  addModalToggle();
  backdropToggle();
});

backdrop.addEventListener('click', () => {
  addModalToggle();
  backdropToggle();
});
