import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';

class VehiclesSearch extends Component {
    state = {
        query: "",
        vehicles: []
    };

    onChange = e => {
        const {value} = e.target;
        this.setState({
        query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://swapi.dev/api/vehicles?search=${query}`;

    fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ vehicles: data.results });
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
        {this.state.vehicles.map(vehicle => (
            <ul key={vehicle.name}>
                <div className="card_info">
                    <div className="vehicle_title">{vehicle.name}</div>
                    <div className="vehicle_model">Model: {vehicle.model}</div>
                    <div className="vehicle_length">Total length: {vehicle.length}</div>
                    <div className="vehicle_crew">Crew: {vehicle.crew}</div>
                    <div className="vehicle_manufacturer">Manufaturer: {vehicle.manufacturer}</div>
                    <div className="vehicle_passengers">No. of passengers: {vehicle.passengers}</div>
                    <Link to={'/vehicle/' + vehicle.name} key={vehicle.created} title={vehicle.name} {...vehicle}>More info</Link>
                </div>
            </ul>
        ))}
        </form>
    );
    }
}

export default VehiclesSearch