import React, { Component } from 'react';

import AddItemComponent from '../components/Item/AddItem';

export default class AddItem extends Component {
  render() {
    return (
        <AddItemComponent visible={this.props.visible}/>
    )
  }
}
