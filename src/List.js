import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";


const List = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    const task = e.target.previousSibling.value.trim();
      dispatch(addTodo(task));
      e.target.previousSibling.value = "";
    
  };

  return (
    <div>
      <input type="text" placeholder="Enter task" />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
