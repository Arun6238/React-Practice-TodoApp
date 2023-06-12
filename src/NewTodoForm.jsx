import { useState } from "react"
export  function NewTodoForm({addTodos}){
    const [newItem ,setNewItem] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(newItem === "") return
        addTodos(newItem)
        setNewItem("")
      }


    return(
        <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onInput={(e)=>{setNewItem(e.target.value)}} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )

}