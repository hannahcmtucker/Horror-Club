import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../actions/history';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render(){
      return <ComposedComponent {...this.props}/>
    }

    componentWillMount(){
      if (!this.props.authenticated){
        history.push('/');
      }
    }

    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        history.push('/');
      }
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication);
}