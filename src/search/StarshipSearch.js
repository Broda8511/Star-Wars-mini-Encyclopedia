import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';

class StarshipSearch extends Component {
    state = {
        query: "",
        starships: []
    };

    onChange = e => {
        const {value} = e.target;
        this.setState({
        query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://swapi.dev/api/starships?search=${query}`;

    fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ starships: data.results });
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
        {this.state.starships.map(starship => (
            <ul key={starship.name}>
                <div className="card_info">
                    <div className="starship_title">{starship.name}</div>
                    <div className="starship_length">Total length: {starship.length}</div>
                    <div className="starship_cargo">Cargo capacity: {starship.cargo_capacity}</div>
                    <div className="starship_consumables">Consumables: {starship.consumables}</div>
                    <div className="starship_crew">Crew: {starship.crew}</div>
                    <div className="starship_passengers">No. of passengers: {starship.passengers}</div>
                    <div className="starship_manufacturer">Manufacturer: {starship.manufacturer}</div>
                    <Link to={'/starship/' + starship.name} key={starship.created} title={starship.name} {...starship}>More info</Link>
                </div>
            </ul>
        ))}
        </form>
    );
    }
}

export default StarshipSearch