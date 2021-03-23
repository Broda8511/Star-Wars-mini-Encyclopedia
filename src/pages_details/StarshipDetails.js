import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class StarshipDetails extends Component {
  render() {
    return (
      <div className="card_info_starships_details">
        <div className="starship_title">{this.props.starship.name}</div>
        <div className="starship_model">Model: {this.props.starship.model}</div>
        <div className="starship_manufacturer">
          Manufacturer: {this.props.starship.manufacturer}
        </div>
        <div className="starship_length">
          Length: {this.props.starship.length}
        </div>
        <div className="starship_crew">Crew: {this.props.starship.crew}</div>
        <div className="starship_passengers">
          Passengers: {this.props.starship.passengers}
        </div>
        <div className="starship_consumables">
          Consumables: {this.props.starship.consumables}
        </div>
        <div className="starship_mglt">MGLT: {this.props.starship.MGLT}</div>
        <div className="starship_cost">
          Cost: (in credits){this.props.starship.cost_in_credits}
        </div>
        <div className="starship_speed">
          Max atm. speed: {this.props.starship.max_atmosphering_speed}
        </div>
        <div className="starship_rating">
          Hyperdrive rating: {this.props.starship.hyperdrive_rating}
        </div>
        <div className="starship_class">
          Starship class: {this.props.starship.starship_class}
        </div>
        <div className="starship_cargo">
          Cargo capacity: {this.props.starship.cargo_capacity}
        </div>

        <Link className="back_link" to="/starships">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { starship: state.active };
}

export default connect(mapStateToProps)(StarshipDetails);
