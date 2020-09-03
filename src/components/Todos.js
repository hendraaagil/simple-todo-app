import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
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
