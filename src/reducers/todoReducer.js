import uuid from 'uuid/dist/v1';

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          content: action.todo.content,
        },
      ];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
