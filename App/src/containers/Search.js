import React, { Component } from 'react';

import ItemList from '../components/Item/ItemList';
import * as mediaActions from '../actions/mediaActions';

export default class SearchContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    mediaActions.getMedia().then(result => {
      this.setState({
        items: result.data
      });
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm) {
      mediaActions.getMediaByTitle(nextProps.searchTerm).then(result => {
        this.setState({
          items: result.data
        });
      });
    }
  }

  render() {
    return (
      <div>
        <ItemList items={this.state.items} searchTerm={this.props.searchTerm} />
      </div>
    )
  }
}
