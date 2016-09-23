import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import {Profile} from './profile.jsx';

global.jQuery = jQuery;
global.$ = jQuery ;

require('bootstrap');
require('bootstrap-material-design');

$.material.init();

class BigFrame extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{'marginTop' : '40px'}}>
          <div className="well col-lg-6 col-lg-offset-3 col-xs-10 col-xs-offset-1">
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <BigFrame />,
  document.getElementById('isi')
);
