import { ListItem } from "./ListItem"
export function TodoList({todos,removeTodo,toggleTodo}){
    return (
        <ul className="list" style={{margin:0}}>
        {todos.length === 0 && <p>No todos</p>}
        {todos.map(todo =>{
                   return(
                    <ListItem 
                        {...todo} 
                        key={todo.id} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                   )
                  })
        }
      </ul>
    )
}