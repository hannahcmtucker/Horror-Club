import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchMovie } from '../../actions/movies';

import NavBar from '../../containers/nav_bar';
import Footer from '../../components/footer';

class MovieDetail extends Component {
  render(){

    if (!this.props.movie){
      return <div></div>;
    }

    return (
      <div>
        <NavBar />
          <section className="singlemovie">
            <Link to="/movies">Back to All Movies</Link>
            <h2 className="singlemovie__title">{this.props.movie.title}</h2>
            <p className="singlemovie__year">{this.props.movie.year}</p>
            <p className="singlemovie__description">{this.props.movie.description}</p>
          </section>
        <Footer />
       </div>
    );
  }

  componentDidMount(){
    let { id } = this.props.match.params;
    this.props.fetchMovie(id);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { movie: state.movies[ownProps.match.params.id] }
}

export default connect (mapStateToProps, { fetchMovie })(MovieDetail);