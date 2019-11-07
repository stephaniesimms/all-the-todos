/* Todo List app */

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  storedTodos();
  loadEvents();
});

// load all event listeners
const loadEvents = () => {
  document.querySelector('form').addEventListener('submit', submitForm);
  document.querySelector('#clearList').addEventListener('click', clearList);
  document.querySelector('ul').addEventListener('click', deleteOrMark);
}

// retrieve from localStorage
const storedTodos = () => {
  console.log('I ran to retrieve todos')
  let taskList = document.querySelector('ul');
  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  console.log(savedTasks)
  for (let i = 0; i < savedTasks.length; i++) {
    let newTask = document.createElement('li');
    newTask.innerHTML = `<i class="delete fa fa-trash-alt"></i>
          <input type="checkbox"><label>${savedTasks[i].task}</label>`;
    console.log(newTask)
    taskList.appendChild(newTask);
  }
  if (taskList.childNodes.length > 1) {
    document.querySelector('#tasks').style.display = 'block';
  }
}

// submit the form with new tasks input
const submitForm = (evt) => {
  evt.preventDefault();
  let newTask = document.querySelector('#newTask');
  
  if (newTask.value !== '') {
    addTask(newTask.value);
  }
  newTask.value = '';
}

// add the new task to the task list and save to localStorage
const addTask = (task) => {
  let taskList = document.querySelector('ul');
  let listItem = document.createElement('li');
  
  listItem.innerHTML = `<i class="delete fa fa-trash-alt"></i>
          <input type="checkbox"><label>${task}</label>`;
  taskList.appendChild(listItem);
  document.querySelector('#tasks').style.display = 'block';

  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.push({task: listItem.innerText})
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

// clear/reset the list of tasks
const clearList = () => {
  let listToClear = document.querySelector('ul');
  listToClear.innerHTML = '';
  
  localStorage.clear();
  hideList();
}

// hide the list of tasks
const hideList = () => {
  document.querySelector('#tasks').style.display = 'none';
}

// handle deleting or marking a task depending on where user clicks
const deleteOrMark = (evt) => {
  if (evt.target.tagName.toLowerCase() === 'i') {
    deleteTask(evt.target.parentNode); // delete entire li 
  } else if (evt.target.tagName.toLowerCase() === 'input') {
    markTask(evt); 
  }
}

// delete a task
const deleteTask = (taskNode) => {
  taskNode.remove();
  
  // TODO: delete from localStorage too
  
  // if deleting last item in list, hide list
  let list = document.querySelector('ul');
  if (list.childNodes.length <= 1) {
    hideList();
  }
}

// TODO: add checked flag to localStorage item and toggle that too
// display stored task as checked/unchecked when retrieving localStorage 

// toggle checkbox to mark and unmark a task as done
const markTask = (evt) => {
  const task = evt.target.nextSibling;
  task.classList.toggle('checked');
}
