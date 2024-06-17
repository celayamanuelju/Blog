import "./App.css";
import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateButtom } from "./CreateButtom";
import { TodoItem } from "./TodoItem";

const defaulTodos = [
  { text: "salir a caminar", completed: false },
  { text: "comprar comida", completed: false },
  { text: "Estudiar mi clase", completed: true },
  { text: "Dormir", completed: true },
  { text: "Tomar Agua", completed: false },
];
// localStorage.setItem("Todo-V1", defaulTodos)

function App() {

  const localStorageTodo = localStorage.getItem("Todo-V1")
  let parsedItems = JSON.parse(localStorageTodo)

  const [searchValue, setsearchValue] = React.useState("");
  const [todos, setTodo] = React.useState(parsedItems);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const serchedTodos = todos.filter((todo) => {
     return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  const raeadyTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
   (todo) =>
    todo.text == text
   )
   newTodos[todoIndex].completed = true
   setTodo(newTodos)
  }

  const onDelete = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
   (todo) =>
    todo.text == text
   )
  newTodos.splice(todoIndex, 1) 
   setTodo(newTodos)
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}  />
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />
      <TodoList>
        {serchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={()=> raeadyTodo(todo.text)}
            onDelete={()=> onDelete(todo.text)}

          />
        ))}
      </TodoList>
      <CreateButtom />
    </>
  );
}

export default App;
