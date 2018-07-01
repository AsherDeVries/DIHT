import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import SearchBar from './SearchBar';

const SearchOrAddItem = () => {
  return (
    <Segment padded>
      <SearchBar />
      <Divider horizontal>
        <Button variant="fab" color="primary">
          <AddIcon />
        </Button>
      </Divider>

    </Segment>
  );
};

export default SearchOrAddItem;
