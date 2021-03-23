import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class PlanetDetails extends Component {
  render() {
    return (
      <div className="card_info_planets_details">
        <div className="planet_title">{this.props.planet.name}</div>
        <div className="planet_climate">
          Climate: {this.props.planet.climate}
        </div>
        <div className="planet_population">
          Population: {this.props.planet.population}
        </div>
        <div className="planet_terrain">
          Terrain: {this.props.planet.terrain}
        </div>
        <div className="planet_diameter">
          Diameter: {this.props.planet.diameter}
        </div>
        <div className="planet_gravity">
          Gravity: {this.props.planet.gravity}
        </div>
        <div className="planet_rotation">
          Rotation period: {this.props.planet.rotation_period}
        </div>
        <div className="planet_orbital">
          Orbital period: {this.props.planet.orbital_period}
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
