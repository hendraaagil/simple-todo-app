import React, { useState } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

const App = () => {
  const [state, setState] = useState({
    todos: [
      { id: 1, content: 'Do homework' },
      { id: 2, content: 'Learn to code' },
      { id: 3, content: 'Play a game' },
    ],
  });

  const deleteTodo = (id) => {
    const todos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
    setState({
      todos,
    });
  };

  const addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...state.todos, todo];
    setState({
      todos,
    });
  };

  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? 'grey lighten-5' : 'grey darken-4'}>
      <div className="container">
        <h1
          className={
            theme ? 'center blue-text' : 'center blue-text text-darken-3'
          }
        >
          Todo List App
        </h1>
        <button
          className={
            theme
              ? 'btn-large btn-switch grey lighten-5 blue-text'
              : 'btn-large btn-switch grey darken-3 blue-text'
          }
          onClick={() => {
            setTheme(!theme);
          }}
        >
          Change to {theme ? 'dark' : 'light'} mode
        </button>
        <Todos todos={state.todos} deleteTodo={deleteTodo} theme={theme} />
        <AddTodo addTodo={addTodo} theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
