export function ListItem({id,title,completed,removeTodo,toggleTodo}){
    return (
        <li>
        <label>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={(e)=>{toggleTodo(id,e.target.checked)}}
            />
          {title}
        </label>
        <button 
            className="btn btn-danger" 
            onClick={()=>{removeTodo(id)}}
        >
            Delete
        </button>
      </li>
    )
}