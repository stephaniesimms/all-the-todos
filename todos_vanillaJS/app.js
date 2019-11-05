// mark a todo as completed w/ strikethrough when user clicks checkbox
// delete a todo when user clicks trash can


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

// clear/reset the list of tasks and hide it
const clearList = () => {
  let listToClear = document.querySelector('ul');
  listToClear.innerHTML = '';
  document.querySelector('#tasks').style.display = 'none';
}


const deleteOrMark = (evt) => {
  if (evt.target.tagName.toLowerCase() === 'i') {
    deleteTask(evt.target.parentNode);
  } else {
    markTask(evt.target.nextSibling);
  }
}

const deleteTask = (taskNode) => {
  taskNode.remove();
  // TODO: add check to see if that's the last item
  // if so hide list
}

const markTask = (taskNode) => {
  console.log('mark task event')
}