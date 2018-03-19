import React, { Component } from 'react';

import SearchBar from '../components/Search/SearchBar';
import ItemList from '../components/Item/ItemList';
import * as mediaActions from '../actions/mediaActions';

export default class SearchContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    mediaActions.getMedia().then(result => {
      this.setState({
        items: result.data
      });
    })
  }

  handleOnInputChange(value) {
    this.setState({
      searchTerm: value
    });

    mediaActions.getMediaByTitle(value).then(result => {
      this.setState({
        items: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onChange={this.handleOnInputChange.bind(this)}/>
        <ItemList items={this.state.items} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}
