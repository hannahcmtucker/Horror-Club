import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchMovies } from '../actions/index';
import NavBar from '../components/nav_bar';

class MoviesIndex extends Component{
  render(){
    return (
      <div>
        <NavBar></NavBar>
          <div className='movies_section'>
            {this.renderMovies()}
          </div>
      </div>
    );
  }

  renderMovies(){
    return _.map(this.props.movies, movie => {
      return (
          <div className="movie_container" key={movie.id}>
            <section className="movie">
              <h2 className="movie__title">{movie.title}</h2>
              <p className="movie__year">{movie.year}</p>
            </section>
          </div>
      );
    })
  }

  componentDidMount(){
    this.props.fetchMovies();
  }
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
}

export default connect (mapStateToProps, { fetchMovies })(MoviesIndex);
