import React, { useState } from 'react';

function Todo({ id, task, remove, update }) {
  const [value, setValue] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(id, value);

    // this.props.update(this.props.id, this.state.task);
    // this.setState({
    //   isEditing: false
    // });
  }

  return (
    // let todoDisplay = (
      <div>
        <li className='list-group-item'>
          <button className="border-0 bg-white box-shadow-none" onClick={() => setIsEditing(!isEditing)}>
            <i className="fa fa-pencil text-primary box-shadow-none"></i>
          </button>
          <button className="border-0 bg-white shadow-none" onClick={remove}>
            <i class="fa fa-trash text-danger"></i>
          </button>
          {task}
        </li>
      </div>
    );

  // if (isEditing) {
  //   todoDisplay = (
  //     <div>
  //       <form onSubmit={handleUpdate}>
  //         <input
  //           type='text'
  //           value={value}
  //           onChange={evt => setValue(evt.target.value)}
  //         />
  //         <button>Submit</button>
  //       </form>
  //     </div>
  //   );
  // }
  // return todoDisplay;
  // )
}

export default Todo;
