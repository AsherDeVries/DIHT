import React, { Component, Fragment } from 'react';
import { Divider } from 'semantic-ui-react';

import MovieList from '../components/shared/MovieList';
import SearchOrAddItem from '../components/shared/SearchOrAddItem';

export default class HaveItemsContainer extends Component {
  render() {
    return (
      <Fragment>
        <Divider hidden />
        <SearchOrAddItem />
        <Divider hidden />
        <MovieList showRating movies={movies} />
      </Fragment>
    );
  }
}

const movies = [
  {name: 'Harry Potter', year: '2001', rating: '7.3'},
  {name: 'Blade Runner', year: '1982', rating: '8.2'},
  {name: 'Lord of the Rings: The Fellowship of the Ring', year: '2004', rating: '8.1'}
];
