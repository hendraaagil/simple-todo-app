import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const Todos = ({ theme }) => {
  const { todos, dispatch } = useContext(TodoContext);

  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className={
            theme
              ? 'collection-item grey lighten-5 grey-text text-darken-4'
              : 'collection-item grey darken-4 grey-text text-lighten-5'
          }
          key={todo.id}
        >
          <span>{todo.content}</span>
          <i
            className="fas fa-trash red-text"
            onClick={() => {
              dispatch({ type: 'DELETE_TODO', id: todo.id });
            }}
          ></i>
        </div>
      );
    })
  ) : (
    <p
      className={
        theme
          ? 'center grey-text text-darken-4'
          : 'center grey-text text-lighten-5'
      }
    >
      You have no todo's left. Yay!
    </p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
