import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'uuid/v4';

/* 
todos: [
      {
        id: 1,
        task: "Make vanilla JS version of Todo app"
      },
      {
        id: 2,
        task: "Make jQuery version of Todo app"
      },
]
*/

function TodoList() {
  const [todos, setTodos] = useState([])

  const createTodo = task => {
    let newTodo = {
      id: uuid(),
      task: task
    }
    let updatedList = [...todos, newTodo]
    setTodos(updatedList);
  }

  const deleteTodo = id => {
    let updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  }

  const updateTodo = (id, updatedTask) => {
    let updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedList);
  }

  // iterate through all todos and create Todo components
  const todosList = todos.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={updateTodo}
      remove={deleteTodo}
    />
  ));

  return (
    <div className='container text-center mt-5'>
      <h4>TO-DO LIST</h4>
      <NewTodoForm create={createTodo} />
      <ul className='list-group'>{todosList}</ul>
    </div>
  )
}


export default TodoList;
