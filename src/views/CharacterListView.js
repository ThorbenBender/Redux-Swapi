import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetching } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetching();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>
          Loading...
        </div>
      )
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.results,
    fetching: state.fetching,
    error: state.error,
    
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetching
  }
)(CharacterListView);
