/** @jsx jsx */
// import React from 'react';
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
// import Todos from './Todos';
// import AddTodo from './AddTodo';
import Footer from './Footer';

function App({ isDark, setIsDark }) {
  // React.state = {
  //   todos: [
  //     { id: 1, content: 'Do homework' },
  //     { id: 2, content: 'Learn to code' },
  //     { id: 3, content: 'Play a game' },
  //   ],
  // };

  // const deleteTodo = (id) => {
  //   const todos = this.state.todos.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   this.setState({
  //     todos,
  //   });
  // };

  // const addTodo = (todo) => {
  //   todo.id = Math.random();
  //   let todos = [...this.state.todos, todo];
  //   this.setState({
  //     todos,
  //   });
  // };
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
      {/* <Todos todos={this.state.todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} /> */}
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Change to {isDark ? 'light' : 'dark'} mode
      </button>
      <Footer />
    </div>
  );
}

export default App;
