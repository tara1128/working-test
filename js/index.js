/*
  index.js
  latest modified: 2016-10-01 17:18
*/

var IndexLogin = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },

  onChange: function(e) {
    var _target = e.target;
    var _type = _target.type;
    var _val = _target.value;
    if( _type == 'text' ) {
      this.setState({
        username: _val
      });
    } else if( _type == 'password' ) {
      this.setState({
        password: _val
      });
    } else {
      this.giveErrorMsg('Unknown errors occur!');
    }
  },

  handleSubmit: function() {
    var validUserName = this.validate('text', this.state.username);
    var validPassword = this.validate('password', this.state.password);
    if( !validUserName ){
      this.giveErrorMsg( 'Invalid username!' );
    }else if( !validPassword ){
      this.giveErrorMsg( 'Invalid password!' );
    }else{
      alert('OK!!!');
    }
  },

  giveErrorMsg: function(msg) {
    this.setState({error: msg});
  },

  validate: function(type, value) {
    var rules = {
      'text': /\w+[\w.]*@(([c][m]){2}||conew)\.com/,
      'password': /\d{4}\.ok/
    };
    return rules[type].test(value);
  },

  reqForAccount: function() {
    var title = 'Info';
    var description = 'Leave your email here and I will send you an account! Thanks!';
    var popWrap = document.getElementById('myPopupMask');
    ReactDOM.render( <Popup title={title} desc={description} hasInput={true} />, popWrap );
  },

  render: function(){
    return (
      <div className='form-field'>
        <div className='inputs-wrap'>
          <input type='text' onChange={this.onChange} value={this.state.username} placeholder='Your username here' />
          <input type='password' onChange={this.onChange} value={this.state.password} placeholder='Password here' />
        </div>
        <div className='btns-wrap'>
          <a className='btn-submit' onClick={this.handleSubmit}>Enter</a>
          <a className='btn-req' onClick={this.reqForAccount}>Get an account!</a>
        </div>
        <div className='error-msgs'>{this.state.error}</div>
      </div>
    );
  }
});

var divOfLogin = document.getElementById('formDiv');
ReactDOM.render( <IndexLogin />, divOfLogin );


/* Module of Popup */
var Popup = React.createClass({
  
  getInitialState: function() {
    return {
      title: this.props.title,
      desc: this.props.desc,
      hasInput: this.props.hasInput
    }
  },

  onConfirm: function() {
    alert('Ok');
  },

  onCancel: function() {
    alert('Cancelled');
  },

  render: function() {
    if(this.state.hasInput){
      var _input = <input type='text' className='popup-input' id='popupInput' />
    }else{
      var _input = '';
    }
    return (
      <div className='popup-container'>
        <h1>{this.state.title}</h1>
        <p>{this.state.desc}</p>
        <div className='popup-inp'>{_input}</div>
        <div className='popup-btns clearfix'>
          <a className='popup-btn-yes' onClick={this.onConfirm}>OK</a>
          <a className='popup-btn-no' onClick={this.onCancel}>Cancel</a>
        </div>
      </div>
    );
  }

});

