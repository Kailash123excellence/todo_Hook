import React from 'react'

export default function CompletedTask(props) {
  const {name,todos,setTodos}=props
  function GetStatus(name){
    const taskStatus= todos.filter((todos,index)=>{
      if(name==="completed"){
        return todos.completed == true;
      }else{
        return todos.completed!==true;
      }
    })
    setTodos(taskStatus)
  }
  return (
    <>
    <button onClick={()=>GetStatus(name)}>{name}</button>
    </>
  )
}
