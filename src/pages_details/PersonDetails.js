import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class PersonDetails extends Component {
  render() {
    return (
      <div className="card_info_people_details">
        <div className="person_title">{this.props.person.name}</div>
        <div className="person_height">Height: {this.props.person.height}</div>
        <div className="person_mass">Mass: {this.props.person.mass}</div>
        <div className="person_hair">
          Hair color: {this.props.person.hair_color}
        </div>
        <div className="person_skin">
          Skin color: {this.props.person.skin_color}
        </div>
        <div className="person_eye">
          Eye color: {this.props.person.eye_color}
        </div>
        <div className="person_birth">YoB: {this.props.person.birth_year}</div>
        <div className="person_gender">Gender: {this.props.person.gender}</div>
        <Link className="back_link" to="/people">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { person: state.active };
}

export default connect(mapStateToProps)(PersonDetails);
