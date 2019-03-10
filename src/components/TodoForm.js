import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo() {
        this.props.addTodo(this.refs.newText.value);
        this.refs.newText.value = '';
    }
    render() {
        return (
            <div className="siimple-form-field">
                <input type="text" ref="newText" className= "siimple-input" />
                <input type="button" value="追加" onClick={this.addTodo} className="siimple-btn siimple-btn--teal" />
            </div>
        )
    }
};

export default TodoForm