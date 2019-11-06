import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

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

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  createTodo(newTask) {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  updateTodo(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        update={this.updateTodo}
        delete={this.deleteTodo}
      />
    ));

    return (
      <div className='container text-center mt-5'>
        <h4>TO-DO LIST</h4>
        <NewTodoForm create={this.createTodo} />
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default TodoList;
