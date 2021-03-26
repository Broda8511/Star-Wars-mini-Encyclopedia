import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class StarshipDetails extends Component {
  render() {
    return (
      <div className="card_info_starships_details">
        <div className="starship_title">{this.props.starship.name}</div>
        <div className="starship_model">
          <p>Model</p> {this.props.starship.model}
        </div>
        <div className="starship_manufacturer">
          <p>Manufacturer</p> {this.props.starship.manufacturer}
        </div>
        <div className="starship_length">
          <p>Length</p> {this.props.starship.length}
        </div>
        <div className="starship_crew">
          <p>Crew</p> {this.props.starship.crew}
        </div>
        <div className="starship_passengers">
          <p>Passengers</p> {this.props.starship.passengers}
        </div>
        <div className="starship_consumables">
          <p>Consumables</p> {this.props.starship.consumables}
        </div>
        <div className="starship_mglt">
          <p>MGLT</p> {this.props.starship.MGLT}
        </div>
        <div className="starship_cost">
          <p>Cost (in credits)</p>
          {this.props.starship.cost_in_credits}
        </div>
        <div className="starship_speed">
          <p>Max atm. speed</p> {this.props.starship.max_atmosphering_speed}
        </div>
        <div className="starship_rating">
          <p>Hyperdrive rating</p> {this.props.starship.hyperdrive_rating}
        </div>
        <div className="starship_class">
          <p>Starship class</p> {this.props.starship.starship_class}
        </div>
        <div className="starship_cargo">
          <p>Cargo capacity</p> {this.props.starship.cargo_capacity}
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
