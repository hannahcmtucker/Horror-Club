import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutUser } from '../actions/index';

class NavBar extends Component {
  render () {
    return (
      <header className="navbar">
        <nav role="navigation">
            <ul className="navbar__list">
                <li className="navbar__title">
                    <Link to="/">
                      <img className="navbar__handimg" src="../../dist/images/hand.png"/>
                    </Link>
                    <Link to="/">
                      <h3>HorrorClub</h3>
                    </Link>
                </li>
                <li className="navbar__title">
                    <p>What movie shall we watch next...?</p>
                </li>
                <li className="navbar__title">
                  <p>Hello {this.props.username} </p>
                  <Link to='/' onClick={this.signOut.bind(this)}>Logout</Link>
                </li>
            </ul>
        </nav>
      </header>
    );
  }

  signOut(){
    this.props.signoutUser();
  }
}

const mapStateToProps = (state) => {
  return {username: state.auth.username}
}

export default connect(mapStateToProps, { signoutUser })(NavBar);