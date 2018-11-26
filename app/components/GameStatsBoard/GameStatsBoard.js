import React, { Component } from 'react';

import GameStatsBoardStyles from './GameStatsBoardStyles';
import { Container, Row, Column } from '../GridStyles/GridStyles';

class GameStatsBoard extends Component {
  render() {
    return (
      <GameStatsBoardStyles>
        <Container>
          <Row>
            <h2>Game Stats</h2>
          </Row>
          <Row>Easy</Row>
          <Row>
              <Column>Round: <span>2</span></Column>
              <Column>Rounds Left: <span>3</span></Column>
          </Row>
          <Row>
              <Column>Rounds Won: <span>2</span></Column>
              <Column>Rounds Lost: <span>0</span></Column>
          </Row>
          <Row>
            Wrong Guesses Remaining: <span>12</span>
          </Row>
          <Row>
            <Column>Letters Guessed:</Column>
            <Column></Column>
          </Row>
          <Row>A, B, C, E, M, X, Z</Row>
        </Container>
            <button onClick={this.props.changeShown}>Reveal</button>
            <button onClick={this.props.newPokemon}>New</button>
      </GameStatsBoardStyles>
    );
  }
}

export default GameStatsBoard;