/*
  common/components/List.js
*/

import React, { Component, PropTypes } from 'react'
import FormatDate from '../../server/controllers/formatDate'

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    /**
        NOTE: A key should be provided for list items.
        A "key" is a special string attribute you need to include when creating lists of elements.
        Keys help React identify which items have changed, are added, or are removed.
        Keys should be given to the elements inside the array to give the elements a stable identity.
        But when extracting one element from the array, no need to specify the key.
    **/
    const list = this.props.dataList;
    const listItems = list.map( (item, index) =>
      // <li key={index.toString()}> // Only using "index" if items have no stable IDs
      <li className="list-item clearfix" key={item.id}> 
        <span className="item-id">{item.id}. </span>
        <span className="item-txt">{item.content}</span>
        <span className="item-time">({FormatDate(item.date)})</span>
        <span className="item-sta">[{item.sta}]</span>
      </li>
    )
    return (
      <div className="list-wrap">
        <ul>{listItems}</ul>
      </div>
    )
  }
}

List.propTypes = {
  dataList: PropTypes.array.isRequired
}

export default List
