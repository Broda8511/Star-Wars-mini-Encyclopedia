import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class MovieDetails extends Component {
  render() {
    return (
      <div className="card_info_movies_details">
        <div className="movie_title">{this.props.movie.title}</div>
        <div className="movie_release">
          Release date: {this.props.movie.release_date}
        </div>
        <div className="movie_director">
          Director: {this.props.movie.director}
        </div>
        <div className="movie_producer">
          Producer: {this.props.movie.producer}
        </div>
        <div className="movie_plot">{this.props.movie.opening_crawl}</div>
        <Link className="back_link" to="/movies">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movie: state.active };
}

export default connect(mapStateToProps)(MovieDetails);
