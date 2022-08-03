function createList() {
  let list = document.createElement('ol');
  list.id = 'lista-tarefas';
  document.body.appendChild(list);
}
createList();

function createButton() {
  let button = document.createElement('button');
  let divTask = document.querySelector('.tasksEntries');
  button.id = 'criar-tarefa';
  button.innerText = 'Criar tarefa'
  divTask.appendChild(button);
}
createButton();

let btnAddTask = document.querySelector('#criar-tarefa');
let list = document.querySelector('ol');
btnAddTask.addEventListener('click', function() {
  let input = document.querySelector('input');
  let item = document.createElement('li');
  item.className = 'itemList';
  item.innerText = input.value;
  list.appendChild(item);
  input.value = '';
  //localStorage.setItem('task', item);
})

let li = list.childNodes;
list.addEventListener('click', (event) => {
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('selected') 
  };
  if (event.target.className === 'itemList') {
    event.target.classList.add('selected');
  }  
})

list.addEventListener('dblclick', (event) => {
  if (event.target.className.includes('completed')) {
    event.target.classList.remove('completed')
  } else {
    event.target.classList.add('completed');    
  }
})


let btnClear = document.createElement('button');
btnClear.id = 'apaga-tudo';
btnClear.innerText = 'Limpar';
document.body.appendChild(btnClear);
btnClear.addEventListener('click', function() {
  let listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index++) {
    listItem[index].remove();    
  }
})

let btnRemoveFinalized = document.createElement('button');
btnRemoveFinalized.id = 'remover-finalizados';
btnRemoveFinalized.innerText = 'Limpar finalizados';
document.body.appendChild(btnRemoveFinalized);
btnRemoveFinalized.addEventListener('click', function() {
  let listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index++) {
    if (listItem[index].className.includes('completed')){
      listItem[index].remove();
    }
  }
})

let btnSave = document.createElement('button');
btnSave.id = 'salvar-tarefas';
btnSave.innerText = 'Salvar lista';
document.body.appendChild(btnSave);
btnSave.addEventListener('click', function() {
  let wholeList = [];
  let listClass = [];
  let listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    wholeList.push(listItem[index].innerHTML);
    listClass.push(listItem[index].className);    
  }
  localStorage.setItem('list', JSON.stringify(wholeList));
  localStorage.setItem('class', JSON.stringify(listClass));

});

let btnRemoveSelected = document.createElement('button');
btnRemoveSelected.id = 'remover-selecionado';
btnRemoveSelected.innerText = 'Remover selecionado';
document.body.appendChild(btnRemoveSelected);
btnRemoveSelected.addEventListener('click', function() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className.includes('selected')) {
      li[index].remove();
    }    
  }
})

// Parte do código foi feito com auxilio do exemplo sobre webStorage do Course
function start() {
  if (localStorage.getItem('list') === null || localStorage.getItem('class') === null ) {
    localStorage.setItem('list', JSON.stringify([]));
    localStorage.setItem('class', JSON.stringify([]));
  } else {
    let listSaved = JSON.parse(localStorage.getItem('list'));
    let classSaved = JSON.parse(localStorage.getItem('class'));
    for (let index = 0; index < listSaved.length; index += 1) {
      let item = document.createElement('li');
      item.innerText = listSaved[index];
      item.className = classSaved[index];
      list.appendChild(item);
    }
  }
}

window.onload = function() {
  start();
};
