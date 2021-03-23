import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectPerson } from "../store/actions/actions";

class PersonSearch extends Component {
  state = {
    query: "",
    people: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://swapi.dev/api/people?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ people: data.results });
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
          <div className="card">
            {this.state.people.map((person) => (
              <ul
                key={person.name}
                onClick={() => this.props.selectPerson(person)}
              >
                <div className="card_info_people">
                  <div className="person_title">
                    {person.name} <p>({person.gender})</p>
                  </div>
                  <div className="person_birth">
                    Birth year: {person.birth_year}
                  </div>
                  <div className="person_eye">
                    Eye color: {person.eye_color}
                  </div>
                  <div className="person_hair">
                    Hair color: {person.hair_color}
                  </div>
                  <div className="person_mass">Mass: {person.mass} kg</div>
                  <div className="person_height">
                    Height: {person.height} cm
                  </div>

                  <div>
                    <Link
                      className="details_link"
                      to={`/people/${person.name}`}
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
  return { people: state.people };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectPerson: selectPerson,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonSearch);
