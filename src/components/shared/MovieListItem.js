import React, { Fragment } from 'react';
import { List, Rating, Checkbox } from 'semantic-ui-react';

const MovieListItem = (props) => {
  return (
    <List.Item>
      <List.Content floated="left">
        <List.Header as='a'>{props.movie.name}</List.Header>
        {props.showRating &&
          <Fragment>
            <Rating disabled icon='star' defaultRating={1} maxRating={1} />
            <span><b>: {props.movie.rating}</b></span>
          </Fragment>
        }
        <List.Description>
          <span style={{ fontSize: '15px' }}> <b>Year:</b> <i>{props.movie.year} </i></span>
        </List.Description>
      </List.Content>
      {props.markable && <List.Content floated="right">
        <span style={{ fontSize: '15px' }}>Mark as 'have' </span><Checkbox toggle />
      </List.Content>}

    </List.Item>
  );
};

export default MovieListItem;
