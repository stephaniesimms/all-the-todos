import React, { useState } from 'react';

function NewTodoForm({ create }) {
  const [value, setValue] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // prevent empty submission
    if (!value) return;
    create(value);

    // reset form
    setValue('');
  }

  return (
    <form className='my-4' onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='task'>Task:</label>
        <input
          id='task'
          name='task'
          type='text'
          className='form-control'
          value={value}
          onChange={evt => setValue(evt.target.value)}
        />
        <button>ADD</button>
      </div>
    </form>
  );
}

export default NewTodoForm;