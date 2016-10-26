/*
  index.js
  latest modified: 2016-10-26 18:18
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
      ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode(this).parentNode );
      var divOfCategory = document.getElementById('categoryDiv');
      var cates = cateList;
      ReactDOM.render( <Categories list={cates} ck={this.state.username} />, divOfCategory );
      reactCookie.save('CMWebTester', this.state.username);
    }
  },

  giveErrorMsg: function(msg) {
    this.setState({error: msg});
  },

  removeErrorMsg: function() {
    if( this.state.error ){
      this.setState({error: ''});
    }
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
    var description = 'Leave your email here and I will send you an account.';
    var popWrap = document.getElementById('myPopupMask');
    ReactDOM.render( <Popup title={title} desc={description} mask={popWrap} hasInput={true} />, popWrap );
  },

  componentWillMount: function() {
    var _this = this;
    if( document.addEventListener ){
      document.addEventListener('keypress', function(e){
        if(e.keyCode == 13){
          _this.handleSubmit();
        }
      });
    }
  },

  render: function(){
    return (
      <div className='form-field'>
        <h2 className='form-title'>Sign in to get started!</h2>
        <div className='inputs-wrap'>
          <input type='text' onChange={this.onChange} onFocus={this.removeErrorMsg} autoFocus value={this.state.username} placeholder='Your username here please' />
          <input type='password' onChange={this.onChange} onFocus={this.removeErrorMsg} value={this.state.password} placeholder='Password here' />
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

/* Module of Categories */
var Categories = React.createClass({

  getInitialState: function() {
    return {
      name: this.props.ck
    }
  },

  checkOutData: function() {
    webTestPlayformEmails.all().one(function(email){
      console.log( 'Get emails from db: ', email.value );
    });
  },

  render: function() {
    if( this.state.name == 'alexandra@cmcm.com' ){
      var adminBtn = <a className='cate-admin-btn' onClick={this.checkOutData}>Check out datas!</a>;
    }else{
      var adminBtn = '';
    }
    return (
      <div className='cate-wrap'>
        <h2 className='cate-title'>Choose one to test</h2>
        {this.props.list.map(function(value,i){
          return (
            <a className='cate-item clearfix' key={i} href={value.linkTo}>
              <span className='cate-name'>{value.projectName}</span>
              <span className='cate-date'>{value.latestModified}</span>
            </a>
          );
        })}
        {adminBtn}
      </div>
    );
  }

});

/* Module of Popup */
var Popup = React.createClass({
  
  getInitialState: function() {
    return {
      title: this.props.title,
      desc: this.props.desc,
      mask: this.props.mask,
      hasInput: this.props.hasInput,
      inputElement: null,
      inputValue: ''
    }
  },

  showPopup: function() {
    this.state.mask.style.display = 'block';
  },

  destroyPopup: function() {
    ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode(this).parentNode );
    this.state.mask.style.display = 'none';
  },

  onConfirm: function() {
    var _this = this;
    if( !_this.state.hasInput ){
      _this.destroyPopup();
    }else if( _this.validate(_this.state.inputValue) ){
      _this.saveEmail( _this.state.inputValue, _this.destroyPopup );
    }else if( _this.state.inputElement ) {
      _this.state.inputElement.style.border = '1px solid #972624';
      _this.state.inputElement.style.transform = 'translateY(4px)';
    }else{
      return;
    }
  },

  saveEmail: function(email, callback) {
    // Insert data to database:
    var emailObj = new webTestPlayformEmails({
      value: email,
      date: new Date().getTime()
    });
    persistence.add( emailObj );
    persistence.flush();
    if(callback){
      callback();
    }
  },

  onCancel: function() {
    this.destroyPopup();
  },

  onChange: function(e) {
    var _val = e.target.value;
    this.setState({
      inputElement: e.target,
      inputValue: _val
    });
  },

  validate: function( value ) {
    var emailPattern = /\w+[\w.]*@[\w.]+\.\w+/;
    return emailPattern.test(value);
  },

  componentWillMount: function() {
    this.showPopup();
  },

  componentWillUnmount: function() {
    this.destroyPopup();
  },

  render: function() {
    if(this.state.hasInput){
      var _input = <input type='text' className='popup-input' onChange={this.onChange} value={this.state.inputValue} />
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

var cateList = [
  {
    projectName: 'cmcm.com/en-us',
    linkTo: 'en-us/',
    latestModified: '2016-10-17 15:04'
  },
  {
    projectName: 'WhatsCall',
    linkTo: 'whatscall/',
    latestModified: '2016-10-21 09:31'
  },
  {
    projectName: 'Pegasi',
    linkTo: 'pegasi/',
    latestModified: '2016-10-12 17:28'
  },
  {
    projectName: 'Piano Tiles 2',
    linkTo: 'piano-tiles/',
    latestModified: '2016-10-26 18:18'
  }
];


function setUpDatabase() {
  if(window.openDatabase){ // Browser supports Web SQL
    persistence.store.websql.config(
      persistence,
      'webTestDB', // Name of DB, create if not existed.
      'Database for webTestPlatform', // Description of DB.
      5 * 1024 * 1024 //the maximum size of your database in bytes (5MB in this example).
    );
  }else{
    persistence.store.memory.config(persistence);
  }
  window.webTestPlayformEmails = persistence.define('Emails', { // Create a table named 'Emails'
    value: '',
    date: ''
  });
  persistence.schemaSync();
};



function init() {
  var cookie = reactCookie.load('CMWebTester');
  if( cookie ){
    var divOfCategory = document.getElementById('categoryDiv');
    ReactDOM.render( <Categories list={cateList} ck={cookie} />, divOfCategory );
  }else{
    var divOfLogin = document.getElementById('formDiv');
    ReactDOM.render( <IndexLogin />, divOfLogin );
  }
  setUpDatabase();
};

init();

