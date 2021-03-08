import React from 'react'
import  '../../../styles/todoAppScreen.css'

export const TodoList = ( { todos, handLeToggle, handLeDelete }) => {
    return (
        <ul>
        {
            todos.map( (todo, i) => (
                <li 
                    key={ todo.id }
                    className="todoTable__inside"
                > 
                    <p
                        className={ `todoTable__inside--box ${ todo.done && 'complete' } `}
                        onClick={ () => handLeToggle( todo.id ) }
                    >
                        { i + 1 }.{ todo.desc} 
                    </p>

                    <button
                    className="todoTable__inside--delete"
                    onClick={ () => handLeDelete(todo.id) }
                    >
                       <i className="fas fa-trash-alt"></i>

                    </button>

                </li>
            ))
        }
    </ul>
    )
}
