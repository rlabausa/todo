import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
    = handler for <form> onSubmit event =
    this function will pass the user input up to <App /> where it will update the `todos` state
    */
    handleSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit(e.target.textField.value);

    }

    render() {
        return (
            <div className="container">
                <h3>
                    <u>Add Todo</u>
                </h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="row input-field">
                        <input id="textField" type="text" />
                        <label htmlFor="textField">What do you need to do?</label>
                    </div>
                    <div className="row input-field">
                        <input type="submit" value="Add" className="btn-large" />
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;