/*
  common/components/Container.js
*/

import React, { Component, PropTypes } from 'react'
import '../styles/reset.css'
import '../styles/main.less'
import Input from './InputBox'
import List from './List'

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list  
    }
  }

  handleListUpdate(newItem) {
    let tmpList = [];
    if ( this.state.list.length ) {
      this.state.list.forEach((i) => {
        tmpList.push(i);
      });
      tmpList.unshift(newItem);
      this.setState({ list: tmpList })
      /**
        Then we need to insert new item into database,
        which should be operated in the server side.
        So we need an API here, for this request to server.
      **/
      this.makeRequestToServer('/api/add', newItem);
    } else {
      return false;
    }
  }

  makeRequestToServer(url, item) {
    let http = null;
    if (window.XMLHttpRequest) {
      http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      http = new ActiveXObject('Microsoft.XMLHTTP');
    } else {
      console.log('Failed in creating http request!');
    }
    let params = JSON.stringify(item);
    http.onreadystatechange = function(){
      if (http.readyState == 4 && http.status == 200) {
        console.log( 200, http, http.responseText );
      } else {
        console.log( 'Not 200', http, http.responseText );
      }
    };
    http.open('POST', url, true);
    http.send(params);
  }

  render() {
    return (
      <div className="container">
        <h3>Input your ideas right now, make life better!</h3>
        <Input updateList={this.handleListUpdate.bind(this)} placeholderText={this.props.placeholderText} btnText={this.props.btnText} />
        <List dataList={this.state.list} />
      </div>
    )
  }
}

Container.propTypes = {
  btnText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default Container
