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
      return;
    }
    // let params = this.serializeData(item);
    let params = JSON.stringify(item);
    /* Must indicate onreadystatechange event function before open() is invoked! */
    http.onreadystatechange = function(){
      if (http.readyState == 4) {
        if ((http.status >= 200 && http.status < 300) || (http.status == 304)) {
          console.log('ResponseText is ', http.responseText);
        } else {
          console.log('Response failed! Status is', http.status);
        }
      }
    };
    http.open('POST', url, true); // 'true' means this request is 'async'
    // http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(params);
  }

  serializeData(objectData) {
    let dataString = [];
    for ( let p in objectData ) {
      dataString.push(p + '=' + objectData[p]);
    }
    dataString = dataString.join('&');
    return dataString;
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
