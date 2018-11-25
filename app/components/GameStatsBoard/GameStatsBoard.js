import React, { Component } from 'react';

class GameStatsBoard extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.changeShown}>Reveal</button>
        <button onClick={this.props.newPokemon}>New</button>
      </div>
    );
  }
}

export default GameStatsBoard;