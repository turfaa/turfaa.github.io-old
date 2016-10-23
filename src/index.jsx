import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import {Profile} from './profile.jsx';

global.jQuery = jQuery;
global.$ = jQuery ;

require('bootstrap');
require('bootstrap-material-design');

$.material.init();

const userProfile = {
    name : "Turfa Auliarachman", 
    nim : "13515133", 
    major : "Informatics Engineering", 
    university : "Bandung Institute of Technology", 
    foto : "img/pasfoto.jpg", 
    birthdate : "April 9, 1997", 
    email : "turfa_auliarachman@rocketmail.com", 
    projecteuler : "kingfalcon", 
    alamat : "Jl. Cisitu Lama V 42B, Dago, Coblong, Bandung", 
    facebook : "https://facebook.com/turfa.auliarachman", 
    gplus : "https://plus.google.com/+TurfaAuliarachman", 
    twitter : "https://twitter.com/TurfaGreenbat", 
    github : "https://github.com/turfaa", 
    codeforces : "http://codeforces.com/profile/NangisDarah"
};


class BigFrame extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{'marginTop' : '40px'}}>
          <div className="well col-lg-6 col-lg-offset-3 col-xs-10 col-xs-offset-1">
            <Profile profileData={userProfile} />
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
