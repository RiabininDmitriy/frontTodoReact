import React from 'react'
import FloatingActionButtons from '../Button/index'
import OutlinedTextFields from '../input/index'
import { sendFetch } from '../../utils/index'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event) {
        event.preventDefault()
        console.log(this.todoValue)
        const todoValue = { todoValue: this.todoValue.state.value, done:false }
        sendFetch(todoValue, "POST", "todo")
            .then(() => { this.todoValue.setState({ value: "" }) })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FloatingActionButtons ref={(node) => this.buttonsValue = node} />
                    <OutlinedTextFields ref={(node) => this.todoValue = node} />
                </form>
            </div>
        )
    }
}

export default Form

