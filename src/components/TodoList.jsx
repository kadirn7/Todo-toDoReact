import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo ,onEditedTodo }) {

    

    return (
        <div style={{ width: '100%', marginTop: '50px' }}>
            {
                    todos && todos.map((todo)=>{
                        return <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onEditedTodo={onEditedTodo} />
                    })                
            }
            

        </div>
    )
}

export default TodoList