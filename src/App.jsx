import TodoInput from "./TodoInput";
import Todo from "./Todo";
import { useState } from "react";
import "./App.css";

function App(e) {
  e.preventDefault;
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodos = (todo) => {
    let todoList = [...todos];
    todoList.splice(todo, 1);
    setTodos([...todoList]);
  };
  return (
    <>
      <div className="container">
        <div id="newtask">
          <TodoInput todos={todos} addTodos={addTodos} />
        </div>
        <div id="newtask" className="list-view">
          <ul>
            {todos &&
              todos.map((todo, index) => {
                return (
                  <Todo
                    todo={todo}
                    key={index}
                    index={index}
                    deleteTodos={deleteTodos}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
