import React from 'react';

import TodoItem from './TodoItem.js'

class TodoList extends React.Component {
    render() {

        // create our list of `TodoItems`
        let todoItems = this.props.todos.map((todo) => {

            // check if the item has already been completed
            let completed = this.props.completed.includes(todo.id) ? true : false;

            return (
                <TodoItem key={todo.id} id={todo.id} value={todo.value} completed={completed} onItemClick={this.props.onItemClick} />

            );
        });

        return (
            <div className="container">

                <h3>
                    <u>Todo List</u>
                </h3>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;