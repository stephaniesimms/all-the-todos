/* Todo List app */

// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   loadEvents();
// });

// load all event listeners
// const loadEvents = () => {
//   document.querySelector('form').addEventListener('submit', submitForm);
//   document.querySelector('#clearList').addEventListener('click', clearList);
//   document.querySelector('ul').addEventListener('click', deleteOrMark);
// }

$('form').submit(function(evt) {
  evt.preventDefault();
  let newTask = $('#newTask').val();
  if (newTask !== '') {
    addTask(newTask);
  }
  this.reset();
})

function addTask(task) {
  $('ul').append(`<i class="delete fa fa-trash-alt"></i>
           <input type="checkbox"><label>${task}</label>`);
  $('#tasks').show();
}

$('#clearList').click(function() {
  $('ul').empty();
  hideList();
});

// hide the list of tasks
function hideList() {
  $('#tasks').hide();
}

// const hideList = () => {
//   document.querySelector('#tasks').style.display = 'none';
// }

// FIXME: handle TypeError from clicking on li, outside trash can or checkbox 
// handle deleting or marking a task depending on where user clicks
// const deleteOrMark = (evt) => {
//   if (evt.target.tagName.toLowerCase() === 'i') {
//     deleteTask(evt.target.parentNode); // delete entire li 
//   } else {
//     markTask(evt); 
//   }
// }

// delete a task
// const deleteTask = (taskNode) => {
//   taskNode.remove();
//   // if deleting last item in list, hide list
//   let list = document.querySelector('ul');
//   if (list.childNodes.length <= 1) {
//     hideList();
//   }
// }

// toggle checkbox to mark and unmark a task as done
// const markTask = (evt) => {
//   const task = evt.target.nextSibling;
//   if (evt.target.checked) {
//     task.style.textDecoration = 'line-through';
//     task.style.color = '#ff0000';
//   } else {
//     task.style.textDecoration = 'none';
//     task.style.color = '#2f4f4f';
//   }
// }