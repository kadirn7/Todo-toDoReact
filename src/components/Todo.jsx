import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit,FaCheck } from "react-icons/fa";
import '../App.css';



function Todo({ todo, onRemoveTodo ,onEditedTodo }) {
   const[editable,setEditable]=useState(false);
   const[editedTodo,setEditedTodo]=useState(todo.content);

    const removeTodo=()=>{
        onRemoveTodo(todo.id);
    }
    const updateTodo=()=>{
        const request={
            id:todo.id,
            content:editedTodo
        }
        onEditedTodo(request);
        setEditable(false);
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px'
        }}>
            < div >
                {
                    editable?<input className='todo-input' type='text' value={editedTodo} onChange={(e)=>setEditedTodo(e.target.value)}
                    style={{width:'380px'}}
                    />
                    :
                    todo.content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable?
                    <FaCheck className='todo-icons' onClick={()=>{
                        updateTodo();
                        setEditable(false);
                    }} />
                    :
                    <FaEdit className='todo-icons' onClick={()=>setEditable(true)} />  
                }
                
            </div>
        </ div>
    )
}

export default Todo