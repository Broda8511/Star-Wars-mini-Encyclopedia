import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectVehicle } from "../store/actions/actions";

class VehicleSearch extends Component {
  state = {
    query: "",
    vehicles: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://swapi.dev/api/vehicles?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ vehicles: data.results });
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
            {this.state.vehicles.map((vehicle) => (
              <ul
                key={vehicle.name}
                onClick={() => this.props.selectVehicle(vehicle)}
              >
                <div className="card_info_vehicles">
                  <div className="vehicle_title">{vehicle.name}</div>
                  <div className="vehicle_model">Model: {vehicle.model}</div>
                  <div className="vehicle_length">
                    Total length: {vehicle.length}
                  </div>
                  <div className="vehicle_crew">Crew: {vehicle.crew}</div>
                  <div className="vehicle_consumables">
                    Consumables: {vehicle.consumables}
                  </div>

                  <div className="vehicle_passengers">
                    No. of passengers: {vehicle.passengers}
                  </div>
                  <Link
                    className="details_link"
                    to={`/vehicles/${vehicle.name}`}
                  >
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
  return { vehicles: state.vehicles };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectVehicle: selectVehicle,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSearch);
