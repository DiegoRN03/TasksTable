import { useState } from "react";

export function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);


  function FormEdit(){
     const [newValue, setNewValue] = useState(item.title);

      function handleSubmit(e) {
        e.preventDefault();
      }
    
    function handleChange(e) {
    
      const value = e.target.value;
      setNewValue(value)
    }
    function handleClickUpdateToDo() {
      onUpdate(item.id, newValue);
      setIsEdit(false)
    }

    return ( 
    <form className="UpdateForm" onSubmit={handleSubmit}>
    <input type="text" className="" onChange={handleChange} value = {newValue}></input>
    <button className="button" onClick={handleClickUpdateToDo}>Update</button>
    </form>
    )
  }
  
  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>

        <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }
  return (
    <div className="todo">
      {isEdit ? <FormEdit></FormEdit> : <TodoElement></TodoElement>}
    </div>
  );

}