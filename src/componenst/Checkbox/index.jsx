import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react'
import { sendFetch } from '../../utils';

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.done,
    };
  }
  toggleChange = (event) => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    sendFetch({ done: !this.state.isChecked }, "PUT", `todo/${event.target.value}`)
  }
  render() {
    return (
      <Checkbox value={this.props.id}
        checked={this.state.isChecked}
        onChange={this.toggleChange}
        toggle />

    );
  }
}

export default Check;