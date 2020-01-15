import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const tasks = [
  
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: tasks
    };
  }

  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    this.setState({
      todoList: newTodoList
    });
  };

  clearItem = id => {
    console.log('items cleared')
    this.setState({
      todoList: this.state.todoList.filter(
        item => item.completed !== true,
      )
    })
  }

  addTask = itemTask => {
    const newTask = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <div className="App">
        <div className="header">
          <h1>To-do List</h1>
        </div>
        <TodoForm addTask={this.addTask} clearItem={this.clearItem} />
        <TodoList 
          list = {this.state.todoList}
          toggleItem= {this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
