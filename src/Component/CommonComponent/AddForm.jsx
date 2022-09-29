import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useHooks from "../Hooks/useHooks";
export default function AddForm(props) {
  const { input, setInput, todos, setTodos, editTodo, setEditTodo } = props;
  function updateTodo(title, id, completed) {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  }

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  }
    useHooks(editTodo,setInput)

  return (
    <>

      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Task..."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="button_add">Add</button>
      </form>
    </>
  );
}
