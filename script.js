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

//let li = document.querySelectorAll('li');
list.addEventListener('click', (event) => {
  //console.log(li.length);
  /*for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('selected') 
  };*/
  //list.childNodes.classList.remove('selected')
  event.target.classList.add('selected');
  //li.classList.remove('selected') 
  
})