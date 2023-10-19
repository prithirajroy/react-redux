function Todo({ todo, index, deleteTodos }) {
  return (
    <li>
      {todo}
      <span>
        <input
          type="button"
          value="X&nbsp;&nbsp;"
          onClick={() => deleteTodos(index)}
        />
      </span>
    </li>
  );
}

export default Todo;
