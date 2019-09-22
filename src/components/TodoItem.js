import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    /*
    = handler for <li> onClick event =
    this function will pass `id` and `completed` props up to <App /> through the `onItemClick` prop (callback that is originally defined as `markItem`) so we can update our list of completed items
    */
    handleClick(e) {
        this.props.onItemClick(this.props.id, this.props.completed);
    }

    render() {
        // render prop with strikethrough if it is completed
        if (this.props.completed) {
            return (
                <li onClick={this.handleClick}>
                    <del>
                        {this.props.value}
                    </del>
                </li>
            );
        } else {
            return (
                <li onClick={this.handleClick}>
                    {this.props.value}
                </li>
            );
        }
    }
}

export default TodoItem;