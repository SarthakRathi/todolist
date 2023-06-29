import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {

  let myStyle = {
    minHeight: "70vh"
  }

  return (
    <div className = "container my-3" style = {myStyle}>
      <h3 className = "text-center my-3" >To do's List</h3>
      {props.todos.length===0 ? "No Items" :
      props.todos.map((todo)=>{
        return <TodoItem todo = {todo} key = {todo.no}   onDelete = {props.onDelete}/>
      })}
    </div>
  )
}
