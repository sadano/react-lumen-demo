import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoDetail from './TodoDetail';

const API = 'http://localhost:8000/v1/todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      isLoading: false,
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.userId = this.getUserId();
  }

  componentDidMount() {
    this.fetchTodo();
  }

  fetchTodo() {
    fetch(API + '/' + this.userId)
    .then(response => {
      if (response.ok) {        
        return response.json();
      } else {
        return { todos: [] };
      }
    })
    .then(data => this.setState({ todos: data }));
  }

  addTodo(title, desc) {
    fetch(API, {
      method: "POST",
      body: JSON.stringify({title: title, desc: desc, user_id: this.userId}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => { this.fetchTodo() });
  }

  deleteTodo(todo_id) {
    fetch(API + '/' + todo_id, {
      method: "DELETE"
    })
    .then(response => { this.fetchTodo() });
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