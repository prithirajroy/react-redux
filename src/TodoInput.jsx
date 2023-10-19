import { useState, useRef } from "react";

function TodoInput({ todos, addTodos }) {
  const inputElement = useRef();
  const [todoItem, addTodoItem] = useState("");

  function handleTodoSubmit(e) {
    e.preventDefault();
    if (todoItem) {
      addTodos(todoItem);
    }
    inputElement.current.value = "";
  }

  return (
    <>
      <input
        type="text"
        name="todo-add"
        onChange={(e) => addTodoItem(e.target.value)}
        ref={inputElement}
      />
      <input type="submit" id="push" onClick={handleTodoSubmit} />
    </>
  );
}

export default TodoInput;
