import React, { Component } from 'react';
import './App.css';
import Form from '../src/componenst/InputButtonForm/index'
import TodoForm from '../src/componenst/ToDoForm/index'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container className="App">
      <Form/>
      <TodoForm/> 
      </Container>
    );
  }
}

export default App;
