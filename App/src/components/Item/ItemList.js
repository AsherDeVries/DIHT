import React from 'react';

import ItemListListItem from './ItemListListItem';

const ItemList = (props) => {
  return (
    <ul>
      {props.items && props.items.map((item) => <ItemListListItem key={item._id} item={item} searchTerm={props.searchTerm} />)}
    </ul>
  )
}

export default ItemList;
