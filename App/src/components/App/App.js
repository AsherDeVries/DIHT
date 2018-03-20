import React, { Component } from 'react';
import './App.css';
import AddItemContainer from '../../containers/AddItem';

import SearchContainer from '../../containers/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Do I Have This?</h1>
        </header>
        <AddItemContainer />
        <SearchContainer />
      </div>
    );
  }
}

export default App;
