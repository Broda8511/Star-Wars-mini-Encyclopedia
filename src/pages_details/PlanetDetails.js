import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class PlanetDetails extends Component {
  render() {
    return (
      <div className="card_info_planets_details">
        <div className="planet_title">{this.props.planet.name}</div>
        <div className="planet_climate">
          <p>Climate</p> {this.props.planet.climate}
        </div>
        <div className="planet_population">
          <p>Population</p> {this.props.planet.population}
        </div>
        <div className="planet_terrain">
          <p>Terrain</p> {this.props.planet.terrain}
        </div>
        <div className="planet_diameter">
          <p>Diameter</p> {this.props.planet.diameter}
        </div>
        <div className="planet_gravity">
          <p>Gravity</p> {this.props.planet.gravity}
        </div>
        <div className="planet_rotation">
          <p>Rotation period</p> {this.props.planet.rotation_period}
        </div>
        <div className="planet_orbital">
          <p>Orbital period</p> {this.props.planet.orbital_period}
        </div>
        <Link className="back_link" to="/planets">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { planet: state.active };
}

export default connect(mapStateToProps)(PlanetDetails);
