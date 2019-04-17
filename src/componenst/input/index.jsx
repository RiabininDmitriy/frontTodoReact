import React from 'react';
import { Input } from 'semantic-ui-react'


class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <Input onChange={this.handleChange} value = {this.state.value} placeholder='....'/>
    );
  }
}



export default OutlinedTextFields
