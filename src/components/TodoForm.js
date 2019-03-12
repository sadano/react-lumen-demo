import React, { Component } from 'react';
import { withRouter } from 'react-router';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo() {
        this.props.addTodo(this.refs.titleText.value, this.refs.descText.value);
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
                        <input type="text" ref="titleText" className="siimple-input siimple-input--fluid" />
                    </div>
                </div>

                <div className="siimple-grid-row">
                    <div className="siimple-grid-col siimple-grid-col--2">
                        <label className="siimple-label">Description:</label>
                    </div>
                    <div className="siimple-grid-col siimple-grid-col--12">
                        <textarea ref="descText" rows="5" className="siimple-textarea siimple-textarea--fluid" />
                    </div>
                </div>

                <div className="siimple-grid-row">
                    <div className="siimple-grid-col">
                        <input type="button" value="Save" onClick={this.addTodo} className="siimple-btn siimple-btn--teal" />
                    </div>
                </div>
            </div >
        )
    }
};

export default withRouter(TodoForm)