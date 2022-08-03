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
  item.innerText = input.value;
  list.appendChild(item);
  input.value = '';
})

let li = list.childNodes;
list.addEventListener('click', (event) => {
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('selected') 
  };
  event.target.classList.add('selected');
  
})

list.addEventListener('dblclick', (event) => { 
  event.target.classList.add('completed');
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


