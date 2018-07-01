import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import MovieListItem from './MovieListItem';

export default class MovieList extends Component {

  renderListItems() {
    return this.props.movies.map(movie => {
      return (
        <MovieListItem
          key={movie.name}
          movie={movie}
          showRating={this.props.showRating}
          markable={this.props.markable}
        />
      );
    });
  }

  render() {
    return (
      <List relaxed divided size="huge">
        {this.renderListItems()}
      </List>
    );
  }
}
