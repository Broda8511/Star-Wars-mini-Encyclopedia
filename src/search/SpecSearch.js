import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectSpec } from "../store/actions/actions";
class SpecSearch extends Component {
  state = {
    query: "",
    species: [],
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });

    this.search(value);
  };

  search = (query) => {
    const url = `https://swapi.dev/api/species?search=${query}`;

    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ species: data.results });
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
            {this.state.species.map((spec) => (
              <ul key={spec.name} onClick={() => this.props.selectSpec(spec)}>
                <div className="card_info">
                  <div className="species_title">{spec.name}</div>
                  <div className="spec_language">Language: {spec.language}</div>
                  <div className="spec_classification">
                    Classification: {spec.classification}
                  </div>
                  <div className="spec_average">
                    Averge lifespan: {spec.average_lifespan}
                  </div>
                  <div className="spec_eye">Eye colors: {spec.eye_colors}</div>
                  <div className="spec_hair">
                    Hair colors: {spec.hair_colors}
                  </div>
                  <div>
                    <Link className="details_link" to={`/species/${spec.name}`}>
                      More info
                    </Link>
                  </div>
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
  return { species: state.species };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectSpec: selectSpec,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SpecSearch);
