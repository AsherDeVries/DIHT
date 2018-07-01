import React, { Component, Fragment } from 'react';
import { Divider } from 'semantic-ui-react';

import MovieList from '../components/shared/MovieList';
import SearchOrAddItem from '../components/shared/SearchOrAddItem';

export default class WishlistContainer extends Component {
  render() {
    return (
      <Fragment>
        <Divider hidden />
        <SearchOrAddItem />
        <Divider hidden />
        <MovieList markable movies={movies} showRating />
      </Fragment>
    );
  }
}

const movies = [
  {name: 'Back to the Future 3', year: '1989', rating: '7.0'},
  {name: 'Donnie Darko', year: '1999', rating: '8.0'},
  {name: 'Star Wars: The Last Jedi', year: '2017', rating: '7.5'}
];
