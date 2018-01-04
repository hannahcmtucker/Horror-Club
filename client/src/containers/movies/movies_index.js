import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchMovies } from '../../actions/movies';
import NavBar from '../../containers/nav_bar';
import Footer from '../../components/footer';
import ReduxForm from './add_movie_form';

class MoviesIndex extends Component{
  render(){
    return (
      <div>
        <NavBar />
          <div className='flex_container'>
            <ReduxForm />
            <div className='movies_section'>
              {this.renderMovies()}
            </div>
          </div>
        <Footer />  
      </div>
    );
  }

  renderMovies(){
    return _.map(this.props.movies, movie => {
      return (
          <div className="movie_container" key={movie.id}>
            <section className="movie">
              <Link to={`/movie/${movie.id}`}>
                <h2 className="movie__title">{movie.title}</h2>
              </Link>
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
