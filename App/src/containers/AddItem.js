import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'

const options = [
  { key: 'k', text: 'Kinder dvd', value: 'kidsDvd' },
  { key: 's', text: 'Film', value: 'movie' },
]

export default class AddItem extends Component {
  state = {
    title: "",
    year: "",
    type: ""
  }

  handleTitleChange = (e, { value }) => this.setState({ title: value })
  handleYearChange = (e, { value }) => this.setState({ year: value })
  handleTypeChange = (e, { value }) => this.setState({ type: value })

  onSubmit = e => {
    e.preventDefault();

    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Form widths="equal" onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Input required label='Titel' placeholder='Titel' onChange={this.handleTitleChange} />
            <Form.Input label='Jaar' placeholder='Jaar' onChange={this.handleYearChange} />
            <Form.Select required label='Soort' options={options} placeholder='Soort' onChange={this.handleTypeChange} />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
