export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

// ? Payload bizim reducer veri göndereceğimiz zaman lazım olur
export const addTodo = (payload) => ({type: ADD_TODO, payload})
export const clearTodo=()=>({type:CLEAR_TODO})

const initialState = {
    todoList : [
        {id:new Date().getTime(), text:"work redux", completed:true},
        
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
      return initialState

     case TOGGLE_TODO:
      return initialState
      
  default:
    return state
  }
}
