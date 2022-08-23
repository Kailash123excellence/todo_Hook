import React from "react";
import CompletedTask from "./CompletedTask";

export default function TodoList(props) {
  const { todos, setTodos,setEditTodo } = props;
const handleComplete=(index)=>{
 const updatedStatus=
    todos.map((item,i)=>{
      if(index===i){
        return{
          ...item,
          completed:!item.completed
        }
      }
      return item;
    })
  // console.log(updatedStatus);
  setTodos(updatedStatus)
};

  const handleDelete=(index)=>{
    setTodos(todos.filter((todo,i)=>index!==i))
  }


  const handleEdit=(index)=>{
    const findTodo= todos.find((todo,i)=>index===i)
    
    setEditTodo(findTodo)

  }


  return (
    <div className="">
      <p className="listHeading">Todo List</p>
      {todos.map((todo,index) => {
        return (
          <li className="todo-item" key={index}>
            <input
              type="text"
              value={todo.title}
              className="list"
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button
                className="button-completed task-button"
                onClick={() => handleComplete(index)}
              >
                <i className="material-icons">
                  {todo.completed === true ? (
                    <i className="material-icons taskCompleted">check_circle </i>
                  ) : (
                    <i className="material-icons taskInCompleted">close</i>
                  )}
                </i>
              </button>

              <button
                className="button-delete task-button"
                onClick={() => handleDelete(index)}
              >
                <i className="material-icons">delete </i>
              </button>

              <button
                className="button-edit task-button"
                onClick={() =>handleEdit(index)}
              >
                <i className="material-icons">edit</i>
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}
