import React, { Component } from 'react';
import { Divider, Grid, Dimmer, Icon } from 'semantic-ui-react';

import './App.css';
import AddItemContainer from '../../containers/AddItem';
import SearchContainer from '../../containers/Search';
import AddItemButton from '../Item/AddItemButton';
import SearchBar from '../Search/SearchBar';

class App extends Component {
  state = {
    addingItem: false,
    searchTerm: ''
  }

  setAddingItemState() {
    this.setState({ addingItem: !this.state.addingItem });
  }

  handleOnInputChange(value) {
    this.setState({
      searchTerm: value
    });
  }

  render() {
    return (
      <div className="App">
        <Grid className="App-header">
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1 className="App-title">Do I Have This?</h1>
              <Icon name="video camera" size="big"/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <SearchBar disabled={this.state.addingItem} onChange={this.handleOnInputChange.bind(this)}/>
            </Grid.Column>
            <Grid.Column width={6}>
              <AddItemButton addingItem={this.state.addingItem} onClick={() => this.setAddingItemState()} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        <Divider hidden />
        
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <AddItemContainer onSubmitHandler={() => this.setAddingItemState()} visible={this.state.addingItem} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
            <Dimmer.Dimmable dimmed={this.state.addingItem}>
              <Dimmer active={this.state.addingItem} />
                <SearchContainer searchTerm={this.state.searchTerm} />
              </Dimmer.Dimmable>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
