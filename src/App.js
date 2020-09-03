/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

const App = ({ isDark, setIsDark }) => {
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
  const theme = useTheme();

  return (
    <div
      className="todo-app container"
      css={css`
        background-color: ${theme.background};
        color: ${theme.text};
      `}
    >
      <h1 className="center blue-text">Todo List App</h1>
      <button
        className="btn-large grey lighten-5 blue-text text-darken-2"
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Change to {isDark ? 'light' : 'dark'} mode
      </button>
      <Todos todos={state.todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
      <Footer />
    </div>
  );
};

export default App;
