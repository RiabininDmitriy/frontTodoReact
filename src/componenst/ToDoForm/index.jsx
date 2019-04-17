import React, { Component } from 'react';
import TodoItem from '../TodoItem/index'
import { sendFetch } from '../../utils/index'
import { List } from 'semantic-ui-react';




class TodoForm extends Component {
  constructor(props) {
    super()
    this.state = { todos: [] }
  }


  componentWillMount() {
    setInterval(() => {
      sendFetch(null, "GET", 'todo')
        .then(data => this.setState({ todos: data }))
    }, 500);
  }


  render() {
    return (
      <List id="todo" divided verticalAlign='middle'>
        {this.state.todos.map(todo => { return (<TodoItem todo={todo} key={todo.id} ></TodoItem>) })}
      </List>
    );
  }
}


export default TodoForm;
