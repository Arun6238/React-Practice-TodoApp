import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./style.css"

export default function App() {
  const [todos ,setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ReactTodoListItem')
    if(localValue === "") return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem('ReactTodoListItem',JSON.stringify(todos))
  },[todos])

  function addTodos(title){
    setTodos((current)=>{
      return [...current,{
        id:crypto.randomUUID(),
        title:title,
        completed:false
      }]
    })
  }

  function toggleTodo(id,completed){
    setTodos(currentTodo =>{
      return currentTodo.map(todo =>{
        // check if the id match and return a new obj with updated values
        if (todo.id === id){
          return {...todo , completed}
        }
        return todo
      })
    })
  }

  function removeTodo(id){
    setTodos(current =>{
      return current.filter(todo =>{
        return todo.id !== id
      })
    })
  }

 let TodoListProps = {
    todos,
    toggleTodo,
    removeTodo,
  }
  return (
    <>
      <NewTodoForm addTodos={addTodos}/>
      <h1 className="header">Todo List</h1> 
      <TodoList {...TodoListProps}/>
    </>
  )  
}


