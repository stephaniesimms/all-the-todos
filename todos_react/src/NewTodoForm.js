import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  state = {
    task: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    // prevent empty submission
    if (this.state.task === '') return;

    let newTodoObj = {
      id: uuid(),
      task: this.state.task
    };
    this.props.createTodo(newTodoObj);

    // reset form
    this.setState({ 
      task: '' 
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label htmlFor='task'>Task:</label>
          <input
            id='task'
            name='task'
            type='text'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>ADD</button>
      </form>
    );
  }
}

export default NewTodoForm;