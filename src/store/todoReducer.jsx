export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'

export const addTodo = (payload) => ({type: ADD_TODO, payload})
// ? Payload bizim reducer veri göndereceğimiz zaman lazım olur


const initialState = {
    todoList : [
        {id:new Date().getTime(), text:"work redux", complated:false},
],
}

export const todoReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return {
        todoList:[...todoList, {id: new Date().getTime(), text:payload, complated:false},
        ],
     }

  default:
    return state
  }
}
