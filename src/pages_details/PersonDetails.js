import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class PersonDetails extends Component {
  render() {
    return (
      <div className="card_info_people_details">
        <div className="person_title">{this.props.person.name}</div>
        <div className="person_height">
          <p>Height</p> {this.props.person.height} cm
        </div>
        <div className="person_mass">
          <p>Mass</p> {this.props.person.mass} kg
        </div>
        <div className="person_hair">
          <p>Hair color</p> {this.props.person.hair_color}
        </div>
        <div className="person_skin">
          <p>Skin color</p> {this.props.person.skin_color}
        </div>
        <div className="person_eye">
          <p>Eye color</p> {this.props.person.eye_color}
        </div>
        <div className="person_birth">
          <p>YoB</p> {this.props.person.birth_year}
        </div>
        <div className="person_gender">
          <p>Gender</p> {this.props.person.gender}
        </div>
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
