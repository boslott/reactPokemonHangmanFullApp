import React, { Component } from 'react';
import styled from 'styled-components';

import { PokemonImageStyles } from './PokemonImageStyles';

class PokemonImage extends Component {
  render() {
    return (
      this.props.shown ? (
        <PokemonImageStyles>
          <img src={this.props.image} />
        </PokemonImageStyles>
      ) : (
        <PokemonImageStyles>
          <img className="hidden" src={this.props.image} />
        </PokemonImageStyles>
      )
    );
  }
}

export default PokemonImage;