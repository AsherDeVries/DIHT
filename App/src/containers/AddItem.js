import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

export default class AddItem extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Input width={3} fluid label='Movie title' placeholder='Movie title' />
                        <Form.Input width={2} fluid label='Year' placeholder='Year' />
                        <Form.Button>Submit</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
