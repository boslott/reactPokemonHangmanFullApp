import React, { Component } from 'react';
import styled from 'styled-components';

import PokemonImage from '../components/PokemonImage/PokemonImage';
import NameDisplay from '../components/NameDisplay/NameDisplay';
import GameStatsBoard from '../components/GameStatsBoard/GameStatsBoard';

const PlayPageMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px dotted red;
`;

const Column = styled.div`
  width: 50%;
  height: 100%;
  border: 1px dotted blue;
`;

class PlayPage extends Component {
  render() {
    return (
      <PlayPageMain>
        <Column>
          <PokemonImage />
          <NameDisplay />
        </Column>
        <Column>
          <GameStatsBoard />
        </Column>
      </PlayPageMain>
    );
  }
}

export default PlayPage;