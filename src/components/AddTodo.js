import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AddTodo = ({ theme }) => {
  const { dispatch } = useContext(TodoContext);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: {
        content,
      },
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo : </label>
        <input
          type="text"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className={
            theme ? 'grey-text text-darken-4' : 'grey-text text-lighten-5'
          }
          required
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
