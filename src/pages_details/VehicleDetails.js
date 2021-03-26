import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class VehicleDetails extends Component {
  render() {
    return (
      <div className="card_info_vehicles_details">
        <div className="vehicle_title">{this.props.vehicle.name}</div>
        <div className="vehicle_model">
          <p>Model</p> {this.props.vehicle.model}
        </div>
        <div className="vehicle_length">
          <p>Total length</p> {this.props.vehicle.length}
        </div>
        <div className="vehicle_crew">
          <p>Crew</p> {this.props.vehicle.crew}
        </div>
        <div className="vehicle_manufacturer">
          <p>Manufaturer</p> {this.props.vehicle.manufacturer}
        </div>
        <div className="vehicle_passengers">
          <p>No. of passengers</p> {this.props.vehicle.passengers}
        </div>
        <div className="vehicle_cost">
          <p>Cost (in credits)</p> {this.props.cost_in_credits}
        </div>
        <div className="vehicle_cargo">
          <p>Cargo capacity</p> {this.props.cargo_capacity}
        </div>
        <div className="vehicle_consumables">
          <p>Consumables</p> {this.props.vehicle.consumables}
        </div>
        <div className="vehicle_class">
          <p>Vehicle class</p> {this.props.vehicle.vehicle_class}
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
