import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class SpecDetails extends Component {
  render() {
    return (
      <div className="card_info_details">
        <div className="species_title">{this.props.spec.name}</div>
        <div className="spec_classification">
          Classification: {this.props.spec.classification}
        </div>
        <div className="spec_designation">
          Designation: {this.props.spec.designation}
        </div>
        <div className="spec_average">
          Average height: {this.props.spec.average_height}
        </div>
        <div className="spec_skin">
          Skin color: {this.props.spec.skin_colors}
        </div>
        <div className="spec_hair">
          Hair color: {this.props.spec.hair_colors}
        </div>
        <div className="spec_eye">Eye color: {this.props.spec.eye_colors}</div>
        <div className="spec_lifespan">
          Average lifespan: {this.props.spec.average_lifespan}
        </div>
        <div className="spec_language">
          Language: {this.props.spec.language}
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
