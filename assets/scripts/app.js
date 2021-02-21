// DOM Elements
const addBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const addModal = document.getElementById('add-modal');
const cancelModalBtn = document.querySelector('.modal__actions')
  .firstElementChild;

// Functions - Handlers
const addModalToggle = () => {
  addModal.classList.toggle('visible');
};

const backdropToggle = () => {
  backdrop.classList.toggle('visible');
};

const toggleAddModalAndBackdrop = () => {
  addModalToggle();
  backdropToggle();
};

// Event Listeners
addBtn.addEventListener('click', toggleAddModalAndBackdrop);

cancelModalBtn.addEventListener('click', toggleAddModalAndBackdrop);

backdrop.addEventListener('click', toggleAddModalAndBackdrop);
