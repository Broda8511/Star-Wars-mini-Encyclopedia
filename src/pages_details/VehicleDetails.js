import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class VehicleDetails extends Component {
  render() {
    return (
      <div className="card_info_vehicles_details">
        <div className="vehicle_title">{this.props.vehicle.name}</div>
        <div className="vehicle_model">Model: {this.props.vehicle.model}</div>
        <div className="vehicle_length">
          Total length: {this.props.vehicle.length}
        </div>
        <div className="vehicle_crew">Crew: {this.props.vehicle.crew}</div>
        <div className="vehicle_manufacturer">
          Manufaturer: {this.props.vehicle.manufacturer}
        </div>
        <div className="vehicle_passengers">
          No. of passengers: {this.props.vehicle.passengers}
        </div>
        <div className="vehicle_cost">
          Cost (in credits): {this.props.cost_in_credits}
        </div>
        <div className="vehicle_cargo">
          Cargo capacity: {this.props.cargo_capacity}
        </div>
        <div className="vehicle_consumables">
          Consumables: {this.props.vehicle.consumables}
        </div>
        <div className="vehicle_class">
          Vehicle class: {this.props.vehicle.vehicle_class}
        </div>
        <Link className="back_link" to="/vehicles">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { vehicle: state.active };
}

export default connect(mapStateToProps)(VehicleDetails);
