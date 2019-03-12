import React from 'react';
import { Link } from 'react-router-dom';

const TodoList = (props) => {
    return (
        <ul className="siimple-list">
            {props.todos.map((todo, i) => {
                return <li key={i} className="siimple-list-item siimple--bg-white">
                    <Link to={'/list/' + todo.id}>{todo.title}</Link>
                </li>
            })
            }
        </ul>
    )
};

export default TodoList