import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import axios from 'axios';

import PokemonImage from '../components/PokemonImage/PokemonImage';
import NameDisplay from '../components/NameDisplay/NameDisplay';
import GameStatsBoard from '../components/GameStatsBoard/GameStatsBoard';
import { Container, Row, Column } from '../components/GridStyles/GridStyles';


class PlayPage extends Component {

  state = {
    currentPokemonName: '',
    currentPokemonImage: '',
    shown: false,
    loading: true,
  }

  newPokemon = () => {
    this.setState({ loading: true, shown: false });
    let random = Math.floor(Math.random() * 802);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
      .then(res => {
        if(random < 10) {
          random = `00${random}`;
        }
        if(9 < random && random <  100) {
          random = `0${random}`;
        }
        this.setState({
          loading: false,
          currentPokemonName: res.data.forms[0].name,
          currentPokemonImage: `http://assets.pokemon.com/assets/cms2/img/pokedex/full/${random}.png`,
        });
      })
      .catch(error => console.log(error));
  }

  changeShown = () => {
    this.setState({ shown: !this.state.shown });
  }

  componentDidMount() {
    this.newPokemon();
  }

  render() {
    return (
      <Container>
        <Row>
          <Column>
            {!this.state.loading && (
              <PokemonImage image={this.state.currentPokemonImage} shown={this.state.shown} />
            )}
          </Column>
          <Column>
            <GameStatsBoard changeShown={this.changeShown} newPokemon={this.newPokemon} />
          </Column>
        </Row>
        <Row>
          <NameDisplay  name={this.state.currentPokemonName} />
        </Row>
      </Container>
    );
  }
}

export default PlayPage;