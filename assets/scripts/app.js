// DOM
// Main Elements
const addBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');

// Modals
const addModal = document.getElementById('add-modal');
const modalActions = document.querySelectorAll('.modal__actions');
const cancelModalBtn = modalActions[0].firstElementChild;
const addModalBtn = modalActions[0].lastElementChild;
const userInputs = addModal.querySelectorAll('input');
////////////////////////////

// DATA
const itemsList = [];

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

const clearInput = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const addItem = () => {
  const itemTitle = userInputs[0].value;
  const itemImg = userInputs[1].value;
  const itemRating = userInputs[2].value;

  if (
    itemTitle.trim() === '' ||
    itemImg.trim() === '' ||
    itemRating.trim() === '' ||
    +itemRating < 1 ||
    +itemRating > 5
  ) {
    alert('Please enter valid value (rating between 1 and 5)');
    return;
  }

  const newItem = {
    title: itemTitle.trim(),
    img: itemImg.trim(),
    rating: itemRating.trim(),
  };

  itemsList.push(newItem);
  console.log(itemsList);

  toggleAddModalAndBackdrop();
  clearInput();
};

// Event Listeners
addBtn.addEventListener('click', toggleAddModalAndBackdrop);
backdrop.addEventListener('click', toggleAddModalAndBackdrop);

cancelModalBtn.addEventListener('click', () => {
  toggleAddModalAndBackdrop();
  clearInput();
});
addModalBtn.addEventListener('click', addItem);
