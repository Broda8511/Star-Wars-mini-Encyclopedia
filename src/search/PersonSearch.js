import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';

class PersonSearch extends Component {
    state = {
        query: "",
        people: []
    };

    onChange = e => {
        const {value} = e.target;
        this.setState({
        query: value
        });

        this.search(value);
    };

    search = query => {
        const url = `https://swapi.dev/api/people?search=${query}`;

    fetch(url)
        .then(results => results.json())
        .then(data => {
            this.setState({ people: data.results });
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
        {this.state.people.map(person => (
            <ul key={person.name}>
                <div className="card_info">
                    <div className="person_title">{person.name} ({person.gender})</div>
                    <div className="person_birth">Birth year: {person.birth_year}</div>
                    <div className="person_eye">Eye color: {person.eye_color}</div>
                    <div className="person_hair">Hair color: {person.hair_color}</div>
                    <div className="person_mass">Mass: {person.mass} kg</div>
                    <div className="person_height">Height: {person.height} cm</div>
                    <Link to={'/person/' + person.name} key={person.created} title={person.name} {...person}>More info</Link>
                </div>
            </ul>
        ))}
        </form>
    );
    }
}

export default PersonSearch