import React from "react"
import okLogo from "../../assets/ok.png"
import deleteLogo from "../../assets/delete.png"
import returnLogo from "../../assets/return.png"
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../store/todoReducer';

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm("Bu öğeyi silmek istediğinizden emin misiniz?");
    if (shouldDelete) {
      dispatch(deleteTodo(id));
    }
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#bebe" : "lightgreen",
   
    borderRadius: "5px",
  }

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
              src={completed ? returnLogo : okLogo}            
              className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img

            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  )
}

export default TodoItem
