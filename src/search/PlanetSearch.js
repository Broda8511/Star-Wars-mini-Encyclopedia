import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectPlanet } from "../store/actions/actions";

class PlanetSearch extends Component {
  state = {
    query: "",
    planets: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://swapi.dev/api/planets?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ planets: data.results });
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
            {this.state.planets.map((planet) => (
              <ul
                key={planet.name}
                onClick={() => this.props.selectPlanet(planet)}
              >
                <div className="card_info_planets">
                  <div className="planet_title">{planet.name}</div>
                  <div className="planet_climate">
                    Climate: {planet.climate}
                  </div>
                  <div className="planet_population">
                    Population: {planet.population}
                  </div>
                  <div className="planet_terrain">
                    Terrain: {planet.terrain}
                  </div>
                  <div className="planet_diameter">
                    Diameter: {planet.diameter}
                  </div>
                  <div className="planet_gravity">
                    Gravity: {planet.gravity}
                  </div>
                  <Link className="details_link" to={`/planets/${planet.name}`}>
                    More info
                  </Link>
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
  return { planets: state.planets };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectPlanet: selectPlanet,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetSearch);
