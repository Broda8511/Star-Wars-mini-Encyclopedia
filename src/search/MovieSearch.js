import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MovieSearch extends Component {
    state = {
        query: "",
        movies: []
    };

    onChange = e => {
        const {value} = e.target;
        this.setState({
        query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://swapi.dev/api/films?search=${query}`;

        
    fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ movies: data.results });
        });
    };

    componentDidMount() {
        this.search("");
    }

    render() {
    return (
        <form>
        <input
            type="text"
            className="searchbox-input"
            placeholder="start typing..."
            onChange={this.onChange}
        />
        {this.state.movies.map(movie => (
            <ul key={movie.title}>
                <div className="card_info">
                    <div className="movie_title">{movie.title}</div>
                    <div className="movie_release">Release date: {movie.release_date}</div>
                    <div className="movie_producer">Producer: {movie.producer}</div>
                    <div className="movie_plot">{movie.opening_crawl}</div>
                    
                    <Link to={'/movie/' + movie.title} key={movie.created} title={movie.title} {...movie}>More info</Link>
                </div>
            </ul>
        ))}
        </form>
    );
    }
}

export default MovieSearch