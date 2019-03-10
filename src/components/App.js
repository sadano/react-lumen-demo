import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'test message1' },
        { title: 'test message2' },
        { title: 'test message3' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.userId = this.getUserId();
  }

  addTodo(value) {
    this.state.todos.push({
      title: value
    });
    this.setState({
      todos: this.state.todos
    });
  }

  deleteTodo(i) {
    this.state.todos.splice(i, 1);
    this.setState({
      todos: this.state.todos
    });
  }

  getUserId() {
    let userId = localStorage.getItem('userId');
    if (userId === null) {
      userId = this.createUserId(10);
      localStorage.setItem('userId', userId);
    }
    return userId;
  }

  createUserId(length) {
    let userId = '';
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      userId += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }
    return userId;
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-white">
        <h1 className="siimple-box-title siimple--color-dark">react-lumen-demo</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App