import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoDetail from './TodoDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: 'test message1', desc: 'desc 1' },
        { title: 'test message2', desc: 'desc 2' },
        { title: 'test message3', desc: 'desc 3' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.userId = this.getUserId();
  }

  addTodo(title, desc) {
    this.state.todos.push({
      title: title,
      desc: desc
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
      <BrowserRouter>
        <div className="siimple-box siimple--bg-white">
          <h1 className="siimple-box-title siimple--color-dark">react-lumen-demo</h1>
          <Menu />
          <Route exact path='/list' render={() => <TodoList todos={this.state.todos} />} />
          <Route exact path='/list/:id' render={() => <TodoDetail todos={this.state.todos} deleteTodo={this.deleteTodo} />} />
          <Route exact path='/create' render={() => <TodoForm addTodo={this.addTodo} />} />
          <Route exact path='/' render={() => <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App