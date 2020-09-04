import React from 'react';

const Todos = ({ todos, deleteTodo, theme }) => {
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
              deleteTodo(todo.id);
            }}
          ></i>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left. Yay!</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
