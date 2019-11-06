import React, { Component } from 'react';

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
      todos: [
        {
          id: 1,
          task: "Make vanilla JS version of Todo app"
        },
        {
          id: 2,
          task: "Make jQuery version of Todo app"
        },
        {
          id: 3,
          task: "Make react classes version of Todo app"
        },
        {
          id: 4,
          task: "Make react hooks version of Todo app"
        },
      ]
    };
  }


  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
}

export default TodoList;