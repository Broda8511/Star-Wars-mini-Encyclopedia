import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class SpecDetails extends Component {
  render() {
    return (
      <div className="card_info_species_details">
        <div className="species_title">{this.props.spec.name}</div>
        <div className="spec_classification">
          <p>Classification</p> {this.props.spec.classification}
        </div>
        <div className="spec_designation">
          <p>Designation</p> {this.props.spec.designation}
        </div>
        <div className="spec_average">
          <p>Average height</p> {this.props.spec.average_height} cm
        </div>
        <div className="spec_skin">
          <p>Skin color</p> {this.props.spec.skin_colors}
        </div>
        <div className="spec_hair">
          <p>Hair color</p> {this.props.spec.hair_colors}
        </div>
        <div className="spec_eye">
          <p>Eye color</p> {this.props.spec.eye_colors}
        </div>
        <div className="spec_lifespan">
          <p>Average lifespan</p> {this.props.spec.average_lifespan}
        </div>
        <div className="spec_language">
          <p>Language</p> {this.props.spec.language}
        </div>
        <Link className="back_link" to="/species">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { spec: state.active };
}

export default connect(mapStateToProps)(SpecDetails);
