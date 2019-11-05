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

// FIXME: handle TypeError from clicking outside trash can or checkbox 
// handle deleting or marking a task depending on where user clicks
const deleteOrMark = (evt) => {
  if (evt.target.tagName.toLowerCase() === 'i') {
    deleteTask(evt.target.parentNode); // delete entire li 
  } else {
    markTask(evt); 
  }
}

const deleteTask = (taskNode) => {
  taskNode.remove();
  // TODO: add check to see if that's the last item
  // if so hide list
}

// toggle checkbox to mark and unmark a task as done
const markTask = (evt) => {
  const task = evt.target.nextSibling;
  if (evt.target.checked) {
    task.style.textDecoration = 'line-through';
    task.style.color = '#ff0000';
  } else {
    task.style.textDecoration = 'none';
    task.style.color = '#2f4f4f';
  }
}