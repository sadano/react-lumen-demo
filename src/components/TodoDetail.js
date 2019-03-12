import React, { Component } from 'react';
import { withRouter } from 'react-router';

class TodoDetail extends Component {
    constructor(props) {
        super(props);
        this.todo_id = Number(this.props.match.params.id);
        this.todo = this.props.todos.find(todo => { return todo.id === this.todo_id; });
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    deleteTodo() {
        this.props.deleteTodo(this.todo_id);
        this.props.history.push('/list');
    }
    render() {
        return (
            <div className="siimple-grid">
                <div className="siimple-grid-row">
                    <div className="siimple-grid-col siimple-grid-col--2">
                        <label className="siimple-label">Title:</label>
                    </div>
                    <div className="siimple-grid-col siimple-grid-col--12">
                        <label className="siimple-label siimple-label--fluid">{this.todo.title}</label>
                    </div>
                </div>

                <div className="siimple-grid-row">
                    <div className="siimple-grid-col siimple-grid-col--2">
                        <label className="siimple-label">Description:</label>
                    </div>
                    <div className="siimple-grid-col siimple-grid-col--12">
                        <label className="siimple-label siimple-label--fluid" >
                        {this.todo.desc}
                        </label>
                    </div>
                </div>

                <div className="siimple-grid-row">
                    <div className="siimple-grid-col">
                        <input type="button" value="Remove" onClick={this.deleteTodo} className="siimple-btn siimple-btn--red" />
                    </div>
                </div>
            </div >
        )
    }
};

export default withRouter(TodoDetail)