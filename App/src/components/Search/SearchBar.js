import React from 'react'

const SearchBar = (props) => {
  return (
    <input type="text" onChange={(event) => props.onChange(event.target.value)} />
  )
}

export default SearchBar;
