import React from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <div className="siimple-tabs">
            <div className="siimple-tabs-item"><Link to="/list">List</Link></div>
            <div className="siimple-tabs-item"><Link to="/create">Add</Link></div>
        </div>
    )
}

export default Menu