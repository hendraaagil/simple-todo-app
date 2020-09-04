import React, { useState } from 'react';

const AddTodo = ({ addTodo, theme }) => {
  const [state, setState] = useState({
    content: '',
  });

  const handleChange = (e) => {
    setState({
      content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.content === '') {
      alert('Please fill out the field!');
    } else {
      addTodo(state);
      setState({
        content: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo : </label>
        <input
          type="text"
          onChange={handleChange}
          value={state.content}
          className={
            theme ? 'grey-text text-darken-4' : 'grey-text text-lighten-5'
          }
        />
        <button
          className={theme ? 'btn-large blue' : 'btn-large blue darken-3'}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
