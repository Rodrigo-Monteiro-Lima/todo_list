const container = document.querySelector('#container');
function createList() {
  const list = document.createElement('ol');
  list.id = 'lista-tarefas';
  container.appendChild(list);
}
createList();

function createButton() {
  const button = document.createElement('button');
  const divTask = document.querySelector('.tasksEntries');
  button.id = 'criar-tarefa';
  button.innerText = 'Adicionar';
  divTask.appendChild(button);
}
createButton();

const btnAddTask = document.querySelector('#criar-tarefa');
const list = document.querySelector('ol');
btnAddTask.addEventListener('click', () => {
  const input = document.querySelector('input');
  const item = document.createElement('li');
  if (input.value !== '') {
    item.className = 'itemList';
    item.innerText = input.value;
    list.appendChild(item);
    input.value = '';
  }
});

const li = list.childNodes;
list.addEventListener('click', (event) => {
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('selected');
  }
  if (event.target.className.includes('itemList')) {
    event.target.classList.add('selected');
  }
});

list.addEventListener('dblclick', (event) => {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

const btnClear = document.createElement('button');
btnClear.id = 'apaga-tudo';
btnClear.innerText = '✖';
container.appendChild(btnClear);
btnClear.addEventListener('click', () => {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
});

const btnRemoveFinalized = document.createElement('button');
btnRemoveFinalized.id = 'remover-finalizados';
btnRemoveFinalized.innerText = 'Limpar finalizados';
container.appendChild(btnRemoveFinalized);
btnRemoveFinalized.addEventListener('click', () => {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].className.includes('completed')) {
      listItem[index].remove();
    }
  }
});

const btnSave = document.createElement('button');
btnSave.id = 'salvar-tarefas';
btnSave.innerText = 'Salvar lista';
container.appendChild(btnSave);
btnSave.addEventListener('click', () => {
  const wholeList = [];
  const listClass = [];
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    wholeList.push(listItem[index].innerHTML);
    listClass.push(listItem[index].className);
  }
  localStorage.setItem('list', JSON.stringify(wholeList));
  localStorage.setItem('class', JSON.stringify(listClass));
});

const btnRemoveSelected = document.createElement('button');
btnRemoveSelected.id = 'remover-selecionado';
btnRemoveSelected.innerText = 'Remover selecionado';
container.appendChild(btnRemoveSelected);
btnRemoveSelected.addEventListener('click', () => {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className.includes('selected')) {
      li[index].remove();
    }
  }
});

const btnClearLS = document.createElement('button');
btnClearLS.id = 'clear-saved-list';
btnClearLS.innerHTML = 'Limpar lista salva';
container.appendChild(btnClearLS);
btnClearLS.addEventListener('click', () => {
  localStorage.clear();
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].remove();
  }
});

const btnUp = document.createElement('button');
btnUp.id = 'mover-cima';
btnUp.innerHTML = '⬆';
container.appendChild(btnUp);
btnUp.addEventListener('click', () => {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className.includes('selected') && index !== 0) {
      const position = (index - 1);
      const item = li[index];
      const itemClass = li[index].className;
      item.className = itemClass;
      li[index].remove();
      list.insertBefore(item, list.children[position]);
    }
  }
});

const btnDown = document.createElement('button');
btnDown.id = 'mover-baixo';
btnDown.innerHTML = '⬇';
container.appendChild(btnDown);
btnDown.addEventListener('click', () => {
  const item = document.querySelector('.selected');
  if (item && item.nextSibling !== null) {
    const item2 = document.querySelector('.selected').nextSibling;
    list.insertBefore(item2, item);
  }
});

// Parte do código foi feito com auxilio do exemplo sobre webStorage do Course
function start() {
  if (localStorage.getItem('list') === null || localStorage.getItem('class') === null) {
    localStorage.setItem('list', JSON.stringify([]));
    localStorage.setItem('class', JSON.stringify([]));
  } else {
    const listSaved = JSON.parse(localStorage.getItem('list'));
    const classSaved = JSON.parse(localStorage.getItem('class'));
    for (let index = 0; index < listSaved.length; index += 1) {
      const item = document.createElement('li');
      item.innerText = listSaved[index];
      item.className = classSaved[index];
      list.appendChild(item);
    }
  }
}

window.onload = function load() {
  start();
};
