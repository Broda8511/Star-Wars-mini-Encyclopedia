import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectStarship } from "../store/actions/actions";

class StarshipSearch extends Component {
  state = {
    query: "",
    starships: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://swapi.dev/api/starships?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ starships: data.results });
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
            {this.state.starships.map((starship) => (
              <ul
                key={starship.name}
                onClick={() => this.props.selectStarship(starship)}
              >
                <div className="card_info_starships">
                  <div className="starship_title">{starship.name}</div>
                  <div className="starship_length">
                    Total length: {starship.length}
                  </div>
                  <div className="starship_cargo">
                    Cargo capacity: {starship.cargo_capacity}
                  </div>
                  <div className="starship_consumables">
                    Consumables: {starship.consumables}
                  </div>
                  <div className="starship_crew">Crew: {starship.crew}</div>
                  <div className="starship_passengers">
                    No. of passengers: {starship.passengers}
                  </div>
                  <div className="starship_manufacturer">
                    Manufacturer: {starship.manufacturer}
                  </div>
                  <div>
                    <Link
                      className="details_link"
                      to={`/starships/${starship.name}`}
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
  return { starships: state.starships };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectStarship: selectStarship,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipSearch);
