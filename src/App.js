import React, { useState, useEffect } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import TodoContextProvider from './contexts/TodoContext';

const App = () => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem('theme')));
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

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
        <TodoContextProvider>
          <Todos theme={theme} />
          <AddTodo theme={theme} />
        </TodoContextProvider>
        <Footer theme={theme} />
      </div>
    </div>
  );
};

export default App;
