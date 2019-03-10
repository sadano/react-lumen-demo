import React from 'react';

const TodoList = (props) => {
    return (
        <ul className="siimple-list">
            {props.todos.map((todo, i) => {
                return <li key={i} className="siimple-list-item siimple--bg-white">
                    <input type="button" value="X"
                        onClick={() => props.deleteTodo(i)} 
                        className="siimple-btn siimple-btn--teal" />
                    {todo.title}
                </li>
            })
            }
        </ul>
    )
};

export default TodoList