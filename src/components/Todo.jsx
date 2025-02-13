import React, { useState } from 'react'
import { IoRemoveCircle } from "react-icons/io5";
import '../App.css';



function Todo({ todo }) {
   



    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px'
        }}>
            < div >
                {
                    todo.content
                }
            </div>
            <div>
                <IoRemoveCircle className='todo-icons'  />  
            </div>
        </ div>
    )
}

export default Todo