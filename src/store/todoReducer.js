export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

// ? Payload bizim reducer veri göndereceğimiz zaman lazım olur
export const addTodo = (payload) => ({type: ADD_TODO, payload})
export const clearTodo=()=>({type:CLEAR_TODO})
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });


const initialState = {
    todoList : [
        
        
],
}

export const todoReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return {
        todoList:[...state.todoList, {id: new Date().getTime(), text:payload, complated:false},
        ],
     }

     case CLEAR_TODO:
      return initialState

     case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload),
      };

      case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
      
  default:
    return state
  }
}
