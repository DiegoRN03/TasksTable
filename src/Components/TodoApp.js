import { useState } from "react"
import { Todo } from "./toDo";
import "./todoApp.css"
export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
 

  //Settear
 /*  function handleClick(e) {
   e.preventDefault();
   setTitle('Diego')
  }
   */
  function handleSubmit (e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }
    
    const temp = [... todos]
    temp.unshift(newTodo);
    setTodos(temp)

      setTitle("");
  }

  function handleUpdate(id,value){
    const temp = [... todos]
    const item = temp.find(item => item.id === id);
    item.title = value
    setTodos(temp)
  }


  function handleDelete(id) {
    const temp = todos.filter(item => item.id != id);
    setTodos(temp);
  }


  //Ver cambios en vivo
  function handleChange(e) {
    const value = e.target.value;
    setTitle(value)
  }
  return(
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title}/>
        <input onClick={handleSubmit} className="buttonCreate" type= "submit" value="Create todo"/>
      </form>

      <div className="todosContainers">
        {
          todos.map(item => (
          <Todo key={item.id} item ={item} onUpdate= {handleUpdate} onDelete = {handleDelete}/>
          ))
        }
      </div>
    </div>
  )
}