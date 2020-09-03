import React, { useState } from 'react';

const AddTodo = (props) => {
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
    props.addTodo(state);
    setState({
      content: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new todo : </label>
        <input type="text" onChange={handleChange} value={state.content} />
        <button className="btn-large light-blue darken-2">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
