/* Todo List app */

$('window').ready(function(evt) {
  console.log('DOM fully loaded and parsed');
  loadEvents();
});

// load all event listeners
// const loadEvents = () => {
//   document.querySelector('form').addEventListener('submit', submitForm);
//   document.querySelector('#clearList').addEventListener('click', clearList);
//   document.querySelector('ul').addEventListener('click', deleteOrMark);
// }

// submit the form with new tasks input
$('form').submit(function(evt) {
  evt.preventDefault();
  let newTask = $('#newTask').val();
  if (newTask !== '') {
    addTask(newTask);
  }
  this.reset();
})

// add the new task to the task list
function addTask(task) {
  $('ul').append(`<li><i class="delete fa fa-trash-alt"></i>
           <input type="checkbox"><label>${task}</label></li>`);
  $('#tasks').show();
}

// clear/reset the list of tasks
$('#clearList').click(function() {
  $('ul').empty();
  hideList();
});

// hide the list of tasks
function hideList() {
  $('#tasks').hide();
}

// handle deleting or marking a task depending on where user clicks
$('ul').on('click', 'li', function(evt) {
  if (evt.target.tagName.toLowerCase() === 'i') {
    deleteTask(evt.target.parentNode);
  } else if (evt.target.tagName.toLowerCase() === 'input') {
    markTask(evt.target)
  }
})

// delete a task
function deleteTask(taskNode) {
  taskNode.remove();
  // if deleting last item in list, hide list
  let list = $('ul');
  if (list.children().length === 0) {
    hideList();
  }
}

// toggle checkbox to mark and unmark a task as done
function markTask(check) {
  const task = $(check.nextSibling);
  task.toggleClass('checked');
}
