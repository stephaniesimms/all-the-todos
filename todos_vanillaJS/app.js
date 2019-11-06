/* Todo List app */

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  loadEvents();
});

// load all event listeners
const loadEvents = () => {
  document.querySelector('form').addEventListener('submit', submitForm);
  document.querySelector('#clearList').addEventListener('click', clearList);
  document.querySelector('ul').addEventListener('click', deleteOrMark);
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

// add the new task to the task list
const addTask = (task) => {
  let taskList = document.querySelector('ul');
  let listItem = document.createElement('li');
  
  listItem.innerHTML = `<i class="delete fa fa-trash-alt"></i>
          <input type="checkbox"><label>${task}</label>`;
  taskList.appendChild(listItem);
  document.querySelector('#tasks').style.display = 'block';
}

// clear/reset the list of tasks
const clearList = () => {
  let listToClear = document.querySelector('ul');
  listToClear.innerHTML = '';
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
  // if deleting last item in list, hide list
  let list = document.querySelector('ul');
  if (list.childNodes.length <= 1) {
    hideList();
  }
}

// toggle checkbox to mark and unmark a task as done
const markTask = (evt) => {
  const task = evt.target.nextSibling;
  task.classList.toggle('checked');
}
