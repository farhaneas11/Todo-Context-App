import {v4 as uuid} from 'uuid';

export const TodoReducer = (state , action) => {
  switch (action.type) {
      case 'ADD_TODO':
          return [...state , {
              fullname: action.todos.fullname,
              task : action.todos.task,
              abouttask : action.todos.abouttask,
              id : uuid()
          }]
        case 'REMOVE_TODO' : 
          return state.filter(todo => todo.id !== action.id);  
      default:
          return state;
  }
}

