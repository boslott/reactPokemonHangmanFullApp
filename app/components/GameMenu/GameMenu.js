import React, { Component } from 'react';

import GameMenuStyles from './GameMenuStyles';

// Tttle
// Instructions
// Game choice buttons

class GameMenu extends Component {
  render() {
    return (
      <GameMenuStyles>
        <h2>Game Menu</h2>
        <p>Welcome to Pokemon Hangman!</p>
        <p>Please choose which level of difficulty you wish to play:</p>
        <div className="game-choice-buttons">
          <button>Super Easy Demo</button>
        </div>
        <div>
          <button>Easy</button>
          <button>Medium</button>
          <button>Hard</button>
        </div>
      </GameMenuStyles>
    );
  }
}

export default GameMenu;