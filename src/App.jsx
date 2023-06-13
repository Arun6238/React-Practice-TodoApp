import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { Count } from "./todoCount"
import "./style.css"

export default function App() {
  const [todos ,setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ReactTodoListItem')
    if(localValue === null) return []

    return JSON.parse(localValue)
  })
  const [completed ,setCompleted] = useState(()=>{
    const  localValue = localStorage.getItem('ReactTodoListCompleted')
    if(localValue == null) return 0

    return JSON.parse(localValue)
  })

  
  useEffect(()=>{
    localStorage.setItem('ReactTodoListItem',JSON.stringify(todos))
  },[todos])

  useEffect(()=>{
    localStorage.setItem('ReactTodoListCompleted',JSON.stringify(completed))
  },[completed])

  function addTodos(title){
    setTodos((current)=>{
      return [{id:crypto.randomUUID(),title,completed:false},...current]
    })
  }

  function toggleTodo(id,completed){
      setCompleted(current =>current + (completed ? 1 :-1))
    setTodos(currentTodo =>{
      return currentTodo.map(todo =>{
        // check if the id match and return a new obj with updated values
        console.log(todo.id)
        if (todo.id === id){
          return {...todo , completed}
        }
        return todo
      })
    })
  }

  function removeTodo(id,completed){
    setCompleted(current =>current + (completed && -1))
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
      <Count count={todos.length} completed={completed}/>
      <TodoList {...TodoListProps}/>
    </>
  )  
}


