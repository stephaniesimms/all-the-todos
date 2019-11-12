import React, { useState } from 'react';

function Todo({ id, task, remove, update }) {
  const [value, setValue] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(id, value);
    setIsEditing(!isEditing);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <form onSubmit={handleUpdate}>
            <input
              type='text'
              value={value}
              onChange={evt => setValue(evt.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      ) : (
          <li className='list-group-item'>
            <button className="border-0 bg-white box-shadow-none" onClick={() => setIsEditing(!isEditing)}>
              <i className="fa fa-pencil text-primary box-shadow-none"></i>
            </button>
            <button className="border-0 bg-white shadow-none" onClick={() => remove(id)}>
              <i className="fa fa-trash text-danger"></i>
            </button>
            {task}
          </li>

        )}
    </div>
  );
}

export default Todo;
