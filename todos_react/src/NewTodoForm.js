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
    this.props.create(newTodoObj);

    // reset form
    this.setState({ 
      task: '' 
    });
  }

  render() {
    return (
      <form className='my-4' onSubmit={this.handleSubmit}>
          <div className='input-group'>
          <label htmlFor='task'>Task:</label>
          <input
            id='task'
            name='task'
            type='text'
            className='form-control'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>ADD</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;