import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.todoText);
    };

    render() {
        return (
            <form className ="form" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="item"
                    placeholder="Add a task..."
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />
                <button type="submit">Add</button>
                <button type="button" onClick={this.props.clearItem}> Clear finished tasks </button>
            </form>
        );
    }
}

export default TodoForm;