import React, { useState } from "react";

import AddForm from "./AddForm";
import Header from "./Header";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [input, setInput]= useState("")
  const [todos,setTodos]= useState([])
  const [editTodo,setEditTodo]= useState(todos)
return (
  <div className="container">
    <div className="Header">
      <Header />
    </div>
    <div className="addForm">
      <AddForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
    <div className="todosList">
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
    
  </div>
);

}
