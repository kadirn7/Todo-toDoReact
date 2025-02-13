import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ onCreateTodo }) {

    
    return (
        <div className='todo-create'>
            <input
                className='todo-input' type="text" placeholder='Todo giriniz' />
            <button  className='todo-create-button'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate