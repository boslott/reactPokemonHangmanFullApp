import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import GameMenuStyles from './GameMenuStyles';
import Error from '../ErrorMessage/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';


const UPDATE_GAME_OPTION_MUTATION = gql`
  mutation UPDATE_GAME_OPTION_MUTATION($option: String!, $userId: ID!) {
    changeGameOption(option: $option, userId: $userId) {
      gameOptions
    }
  }
`;

const GameMenu = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading, error }) => {
      console.log(data.me)
      if(error) return <Error error={error} />
      if(loading) return <p>Loading ...</p>
      return (
        <>
          <UserGameMenu user={data.me} />
        </>
      )
    }}
  </Query>
);

class UserGameMenu extends Component {

  state = {
    option: 'DEMO',
  }

  handleOptionChange = (e, changeOptionFunc) => {
    /*
      Due to setState being asynchronous, we pass the updatePermissionsFunc
      as a callback from when setState has completed so we have the updated
      state to pass into the function
    */
    this.setState({ option: e.target.value}, changeOptionFunc)
    Router.push('/play');
  }

  render() {
    return (
      <Mutation
        mutation={UPDATE_GAME_OPTION_MUTATION}
        variables={{
          option: this.state.option,
          userId: this.props.user.id,
          }}
      >
        {(changeGameOption, { loading, error }) => {
          return (
            <GameMenuStyles>
              <h2>Game Menu</h2>
              <p>
                Welcome to Pokemon Hangman! <br />
                Please choose which level of difficulty you wish to play:
              </p>
              <div>
                <button
                  disabled={loading}
                  value="EASY"
                  onClick={e => this.handleOptionChange(e, changeGameOption)}
                >
                  Easy
                </button>
                <button
                  disabled={loading}
                  value="MEDIUM"
                  onClick={e => this.handleOptionChange(e, changeGameOption)}
                >
                  Medium
                </button>
                <button
                  disabled={loading}
                  value="HARD"
                  onClick={e => this.handleOptionChange(e, changeGameOption)}
                >
                  Hard
                </button>
                <br />
                <button
                  disabled={loading}
                  value="DEMO"
                  onClick={e => this.handleOptionChange(e, changeGameOption)}
                >
                  Demo - Super Easy
                </button>
              </div>
              <p>Instructions: Type letters to guess the Pokemon's name</p>
            </GameMenuStyles>
          )
        }}
      </Mutation>
    );
  }
}

export default GameMenu;