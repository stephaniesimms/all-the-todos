import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false
    };

  }


  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="border-0 bg-white box-shadow-none" onClick={() => this.toggleEdit}>
            <i className="fa fa-pencil text-primary box-shadow-none"></i>
          </button>
          <button className="border-0 bg-white shadow-none" onClick={this.handleDelete}>
            <i class="fa fa-trash text-danger"></i>
          </button>
        </form>
      </div>
    )
  }
}

export default Todo;

// render(){
//   // console.log(`Todo ${this.props.id} re-rendered`);
//   return (
//     <div id={this.props.id}>
//       <form onSubmit={this.handleEdit}>
//         <div className="input-group">
//           <input
//             type="text"
//             name="content"
//             className={this.state.editing ? "form-control border-0 bg-light" : "form-control shadow-none border-0 bg-white"}
//             readOnly={this.state.editing ? '' : "readonly"}
//             value={this.state.content}
//             onChange={this.handleChange}
//           />
//           <button className="border-0 bg-white box-shadow-none" onClick={() => this.toggleEdit}>
//             <i className="fa fa-pencil text-primary box-shadow-none"></i>
//           </button>
//           <button className="border-0 bg-white shadow-none" onClick={this.handleDelete}>
//             <i class="fa fa-trash text-danger"></i>
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
// }