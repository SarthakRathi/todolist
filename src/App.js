import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo
    }));
  }

  const addTodo = (title, desc) => {
    let no;
    if(todos.length===0)
    {
      no = 0
    }
    else
    {
      no = todos[todos.length-1].no
    }
    const myTodo = {
      no : no,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([]);

  return (
    <>
    <Router>
      <Header title = "To Do List"/>

      <Routes>
        <Route exact path="/" element = {
          <>
            <AddTodo addTodo = {addTodo}/>
            <Todos todos = {todos} onDelete = {onDelete}/>
          </>
        }/>

        <Route path="/about" element={<About/>} />

      </Routes>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
