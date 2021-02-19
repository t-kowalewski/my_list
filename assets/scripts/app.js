// DOM Elements
const addBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const addModal = document.getElementById('add-modal');

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
