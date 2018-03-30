import React from 'react';

import ItemListListItem from './ItemListListItem';
import './item-list.css';

const ItemList = (props) => {
  return (
    <ul className="listFont">
      {props.items && props.items.map((item) => <ItemListListItem key={item._id} item={item} searchTerm={props.searchTerm} />)}
    </ul>
  )
}

export default ItemList;
