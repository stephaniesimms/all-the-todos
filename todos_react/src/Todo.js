import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }

  handleDelete() {
    this.props.delete(this.props.id);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let todoDisplay = (
      <div>
        <li className='list-group-item'>
          <button className="border-0 bg-white box-shadow-none" onClick={this.toggleEdit}>
            <i className="fa fa-pencil text-primary box-shadow-none"></i>
          </button>
          <button className="border-0 bg-white shadow-none" onClick={this.handleDelete}>
            <i class="fa fa-trash text-danger"></i>
          </button>
          {this.props.task}
        </li>
      </div>
    );

    if (this.state.isEditing) {
      todoDisplay = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
      );
    }
    return todoDisplay;
  }
}

export default Todo;
