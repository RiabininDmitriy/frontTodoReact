import React from 'react';
import { sendFetch } from '../../utils/index'
import { Button, Segment } from 'semantic-ui-react'

class DeleteItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
      sendFetch(null,"DELETE",`todo/${event.target.value}`)
  }

  render() {
    return (
      <Button onClick={this.handleClick} value = {this.props.id} inverted color='violet' >delete</Button>
    );
  }
}

export default DeleteItem