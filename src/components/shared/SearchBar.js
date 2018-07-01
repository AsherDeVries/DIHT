import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

export default class SearchBar extends Component {
  render() {
    return (
      <Search input={{ fluid: true }} placeholder="Type movie name..." showNoResults={false} size="huge"/>
    );
  }
}
