import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectMovie } from "../store/actions/actions";

class MovieSearch extends Component {
  state = {
    query: "",
    movies: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://swapi.dev/api/films?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ movies: data.results });
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            className="searchbox-input"
            placeholder="start typing..."
            onChange={this.onChange}
          />
          <div className="card_movies">
            {this.state.movies.map((movie) => (
              <ul
                key={movie.title}
                onClick={() => this.props.selectMovie(movie)}
              >
                <div className="card_info_movies">
                  <div className="movie_title">{movie.title}</div>
                  <div className="movie_release">
                    Release date: {movie.release_date}
                  </div>
                  <div className="movie_producer">
                    Producer: {movie.producer.slice(0, 30)}...
                  </div>
                  <div className="movie_director">
                    Director: {movie.director}
                  </div>
                  <div className="movie_plot">
                    {movie.opening_crawl.slice(0, 80)}...
                  </div>

                  <div className="movie_button">
                    <Link
                      className="details_link"
                      to={`/movies/${movie.title}`}
                    >
                      More info
                    </Link>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { movies: state.movies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectMovie: selectMovie,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
