// DOM
// Main Elements
const addBtn = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');

// Modals
const addModal = document.getElementById('add-modal');
const userInputs = addModal.querySelectorAll('input');
const deleteModal = document.getElementById('delete-modal');

const modalActions = document.querySelectorAll('.modal__actions');
const cancelModalBtn = modalActions[0].firstElementChild;
const addModalBtn = modalActions[0].lastElementChild;
const noBtn = modalActions[1].firstElementChild;
const yesBtn = modalActions[1].lastElementChild;

const entryTextSection = document.getElementById('entry-text');
const userList = document.getElementById('user-list');
const userListItems = userList.children;
////////////////////////////

// DATA
const itemsList = [];

// Functions - Handlers
const updataUI = () => {
  if (itemsList.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteListItem = (itemId) => {
  let index = 0;
  for (const item of itemsList) {
    if (item.id === itemId) {
      break;
    }
    index++;
  }

  itemsList.splice(index, 1);
  userListItems[index].remove();

  updataUI();
};

const deleteListItemHandler = (id) => {
  deleteModal.classList.add('visible');

  backdropToggle();
  // deleteListItem(id)
};

const renderNewItem = (newItemObj) => {
  const newItemElement = document.createElement('li');
  newItemElement.classList.add('user-element');
  newItemElement.innerHTML = `
    <div class='user-element__image'>
      <img src='${newItemObj.img}' alt='${newItemObj.title}'>
    </div>

    <div class='user-element__info'>
      <h2>${newItemObj.title}</h2>
      <p>${newItemObj.rating} / 5</p>
    </div>
  `;

  newItemElement.addEventListener(
    'click',
    deleteListItemHandler.bind(null, newItemObj.id)
  );
  userList.append(newItemElement);
};

// addModalToggle
const showAddModal = () => {
  addModal.classList.add('visible');
};

const hideAddModal = () => {
  addModal.classList.remove('visible');
};

const backdropToggle = () => {
  backdrop.classList.toggle('visible');
};

// toggleAddModalAndBackdrop;
const showAddModalAndBackdrop = () => {
  showAddModal();
  backdropToggle();
};

const hideAddModalAndBackdrop = () => {
  hideAddModal();
  backdropToggle();
};

const hideModalsAndBackdrop = () => {
  hideAddModalAndBackdrop();
  deleteModal.classList.remove('visible');
};

const clearInput = () => {
  for (const input of userInputs) {
    input.value = '';
  }
};

const cancelAddModal = () => {
  hideAddModalAndBackdrop();
  clearInput();
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
    id: Math.random().toString(),
    title: itemTitle.trim(),
    img: itemImg.trim(),
    rating: itemRating.trim(),
  };

  itemsList.push(newItem);
  console.log(itemsList);

  cancelAddModal();
  renderNewItem(newItem);
  updataUI();
};

// Event Listeners
addBtn.addEventListener('click', showAddModalAndBackdrop);
backdrop.addEventListener('click', hideModalsAndBackdrop);

cancelModalBtn.addEventListener('click', cancelAddModal);
addModalBtn.addEventListener('click', addItem);
