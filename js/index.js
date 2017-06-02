/*
  index.js, trying ES6
  Latest modified: 2017-06-02 16:19
*/

class IndexLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  onChange(e) {
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
  }

  handleSubmit() {
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
  }

  giveErrorMsg(msg) {
    this.setState({error: msg});
  }

  removeErrorMsg() {
    if( this.state.error ){
      this.setState({error: ''});
    }
  }

  validate(type, value) {
    var rules = {
      'text': /\w+[\w.]*@(([c][m]){2}||conew)\.com/,
      'password': /\d{4}\.ok/
    };
    return rules[type].test(value);
  }

  reqForAccount() {
    var title = 'Info';
    var description = 'Leave your email here and I will send you an account.';
    var popWrap = document.getElementById('myPopupMask');
    ReactDOM.render( <Popup title={title} desc={description} mask={popWrap} hasInput={true} />, popWrap );
  }

  componentWillMount() {
    var _this = this;
    if( document.addEventListener ){
      document.addEventListener('keypress', function(e){
        if(e.keyCode == 13){
          _this.handleSubmit();
        }
      });
    }
  }

  render() {
    return (
      <div className='form-field'>
        <h2 className='form-title'>Sign in to get started!</h2>
        <div className='inputs-wrap'>
          <input type='text' onChange={e=>this.onChange(e)} onFocus={e=>this.removeErrorMsg(e)} autoFocus value={this.state.username} placeholder='Your username here please' />
          <input type='password' onChange={this.onChange.bind(this)} onFocus={this.removeErrorMsg.bind(this)} value={this.state.password} placeholder='Password here' />
        </div>
        <div className='btns-wrap'>
          <a className='btn-submit' onClick={this.handleSubmit.bind(this)}>Enter</a>
          <a className='btn-req' onClick={this.reqForAccount.bind(this)}>Get an account!</a>
        </div>
        <div className='error-msgs'>{this.state.error}</div>
      </div>
    );
  }

};

/* Module of Categories */
class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.ck
    }
  }

  checkOutData() {
    webTestPlayformEmails.all().one(function(email){
      console.log( 'Get emails from db: ', email.value );
    });
  }

  render() {
    if( this.state.name == 'alexandra@cmcm.com' ){
      var adminBtn = <a className='cate-admin-btn' onClick={this.checkOutData.bind(this)}>Check out datas!</a>;
    }else{
      var adminBtn = '';
    }
    return (
      <div className='cate-wrap'>
        <h2 className='cate-title'>Our Current Project</h2>
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

};

/* Module of Popup */
class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc,
      mask: this.props.mask,
      hasInput: this.props.hasInput,
      inputElement: null,
      inputValue: ''
    }
  }
  
  showPopup() {
    this.state.mask.style.display = 'block';
  }

  destroyPopup() {
    console.log(166, ReactDOM.findDOMNode(this)); // Why null ?
    ReactDOM.unmountComponentAtNode( ReactDOM.findDOMNode(this).parentNode );
    this.state.mask.style.display = 'none';
  }

  onConfirm() {
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
  }

  saveEmail(email, callback) {
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
  }

  onCancel() {
    this.destroyPopup();
  }

  onChange(e) {
    var _val = e.target.value;
    this.setState({
      inputElement: e.target,
      inputValue: _val
    });
  }

  validate( value ) {
    var emailPattern = /\w+[\w.]*@[\w.]+\.\w+/;
    return emailPattern.test(value);
  }

  componentWillMount() {
    this.showPopup();
  }

  componentWillUnmount() {
    this.destroyPopup();
  }

  render() {
    if(this.state.hasInput){
      var _input = <input type='text' className='popup-input' onChange={this.onChange.bind(this)} value={this.state.inputValue} />
    }else{
      var _input = '';
    }
    return (
      <div className='popup-container'>
        <h1>{this.state.title}</h1>
        <p>{this.state.desc}</p>
        <div className='popup-inp'>{_input}</div>
        <div className='popup-btns clearfix'>
          <a className='popup-btn-yes' onClick={this.onConfirm.bind(this)}>OK</a>
          <a className='popup-btn-no' onClick={this.onCancel.bind(this)}>Cancel</a>
        </div>
      </div>
    );
  }

};

var cateList = [
  {
    projectName: 'PMP Techniques',
    linkTo: 'pmp/',
    latestModified: '2017-05-27 18:07'
  },
  {
    projectName: 'Security Master',
    linkTo: 'cms/?v=001',
    latestModified: '2017-05-22 15:54'
  },
  {
    projectName: 'CleanMaster for CN',
    linkTo: 'cleanmaster/',
    latestModified: '2017-05-22 15:54'
  },
  {
    projectName: 'Cheetah for Publishers',
    linkTo: 'publishers/',
    latestModified: '2017-02-24 19:20'
  },
  {
    projectName: 'Cheetah Ads Platform',
    linkTo: 'ads/index.html',
    latestModified: '2017-06-02 16:20'
  },
  {
    projectName: 'cmcm.com/en-us',
    linkTo: 'en-us/',
    latestModified: '2017-03-06 16:42'
  },
  {
    projectName: 'cn.cmcm.com',
    linkTo: 'cn.cmcm/',
    latestModified: '2017-03-06 16:43'
  },
  {
    projectName: 'blog.cmcm.com',
    linkTo: 'blog.cmcm/',
    latestModified: '2017-03-07 12:01'
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
    latestModified: '2016-10-28 15:13'
  },
  {
    projectName: 'Test i18n en-us/cms',
    linkTo: 'i18n/www.cmcm.com/en-us/cms',
    latestModified: '2016-11-06 00:55'
  },
  {
    projectName: 'React Isomorphic',
    linkTo: 'try-isomorphic/',
    latestModified: '2016-11-09 14:53'
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

