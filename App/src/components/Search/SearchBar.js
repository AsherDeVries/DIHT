import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = (props) => {
  return (
    <Input 
      disabled={props.disabled}
      fluid
      focus
      placeholder='Zoek op titel'
      onChange={(event) => props.onChange(event.target.value)}
      icon="search"
    />
  )
}

export default SearchBar;
