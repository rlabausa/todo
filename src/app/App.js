import React from 'react';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

// this will be incremented to provide unique keys for <li> elements  
var index = 0;

class App extends React.Component {
  constructor(props) {
    super(props);

    /* elevate state to outer-most component so it is accessible (via props) to other disconnected child components */
    this.state = {
      todos: [],
      completed: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.markItem = this.markItem.bind(this);
  }

  /* 
  = callback function =
  this function gets passed into <TodoForm /> and is called by its onSubmit handler;
  allows us to update the `todos` state with the input entered in the text field
  */
  handleFormSubmit(value) {
    const newTodo = { value: value, id: index }
    let newTodos = this.state.todos.concat([newTodo]);
    this.setState({ todos: newTodos });
    index++;
  }

  /*
  = callback function =
  this function gets passed through <TodoForm /> to <TodoItem /> where it is called by its onClick event handler; allows us to update the `completed` state 
  */
  markItem(id, isCurrentlyCompleted) {
    let newCompleted;

    if (isCurrentlyCompleted) {
      newCompleted = this.state.completed.filter(itemId => itemId !== id);
    } else {
      newCompleted = this.state.completed.concat([id]);
    }

    this.setState({ completed: newCompleted });
  }

  render() {
    return (
      <div className="center-align">
        <TodoForm onFormSubmit={this.handleFormSubmit} />
        <br />
        <hr />
        <TodoList todos={this.state.todos} completed={this.state.completed} onItemClick={this.markItem} />
      </div>
    );
  }
}

export default App;
