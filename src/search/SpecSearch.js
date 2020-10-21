import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SpecSearch extends Component {
    state = {
        query: "",
        species: []
    };

    onChange = e => {
        const {value} = e.target;
        this.setState({
        query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://swapi.dev/api/species?search=${query}`;

    fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ species: data.results });
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
        {this.state.species.map(spec => (
            <ul key={spec.name}>
                <div className="card_info">
                    <div className="spec_title">{spec.name}</div>
                    <div className="species_language">Language: {spec.language}</div>
                    <div className="species_classification">Classification: {spec.classification}</div>
                    <div className="species_average">Averge lifespan: {spec.average_lifespan}</div>
                    <div className="species_eye">Eye colors: {spec.eye_colors}</div>
                    <div className="species_hair">Hair colors: {spec.hair_colors}</div>
                    <Link to={'/spec/' + spec.name} key={spec.created} title={spec.name} {...spec}>More info</Link>
                </div>
            </ul>
        ))}
        </form>
    );
    }
}

export default SpecSearch