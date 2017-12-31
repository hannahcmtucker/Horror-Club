import React, { Component } from 'react';
import Signup from './signup';
import Signin from './signin';

export default class Auth extends Component{
  render(){
    return (
      <div className="signin_flex_container"> 
        <div className="signin_flex_inner"> 
          <Signup />
          <Signin />
        </div>
      </div>
    );
  }
}


