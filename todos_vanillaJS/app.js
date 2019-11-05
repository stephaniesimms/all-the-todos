// add a todo by submitting form
// mark a todo as completed w/ strikethrough when user clicks checkbox
// delete a todo when user clicks trash can
// clear the list of todos when user clicks Clear

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  loadEvents();
});

const loadEvents = () => {
  document.querySelector('form').addEventListener('submit', submit);
}

const submit = (evt) => {
  evt.preventDefault();
  let newTask = document.querySelector('#newTask');
  
  if (newTask.value !== '') {
    addTask(newTask.value);
  }
  newTask.value = '';
}

const addTask = (task) => {
  let taskList = document.querySelector('ul');
  let listItem = document.createElement('li');
  
  listItem.innerHTML = `<span class="delete"><i class="fa fa-trash-alt"></i></span>
          <input type="checkbox"><label>${task}</label>`;
  taskList.appendChild(listItem);
  document.querySelector('#tasks').style.display = 'block';
}