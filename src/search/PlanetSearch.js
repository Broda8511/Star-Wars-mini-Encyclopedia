import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PlanetSearch extends Component {
    state = {
        query: "",
        planets: []
    };

    onChange = e => {
        const {value} = e.target;
        this.setState({
        query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://swapi.dev/api/planets?search=${query}`;

    fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ planets: data.results });
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
        {this.state.planets.map(planet => (
            <ul key={planet.name}>
                <div className="card_info">
                    <div className="planet_title">{planet.name}</div>
                    <div className="planet_climate">Climate: {planet.climate}</div>
                    <div className="planet_population">Population: {planet.population}</div>
                    <div className="planet_terrain">Terrain: {planet.terrain}</div>
                    <div className="planet_diameter">Diameter: {planet.diameter}</div>
                    <div className="planet_gravity">Gravity: {planet.gravity}</div>
                    <Link to={'/planet/' + planet.name} key={planet.created} title={planet.name} {...planet}>More info</Link>
                </div>
            </ul>
        ))}
        </form>
    );
    }
}

export default PlanetSearch