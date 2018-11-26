import { Query, Mutation } from 'react-apollo'; 
import gql from 'graphql-tag';

// To retrieve the current user information from the Apollo Link State Local Cached Data
// Not from a DB call

const GET_LOCALSTATE_CURRENT_USER = gql`
  query GET_LOCALSTATE_CURRENT_USER {
    currentUser @client {
      id
      name
      gameOption
    }
  }
`;

const GET_DB_CURRENT_USER = gql`
  query GET_DB_CURRENT_USER {
    me {
      id
      email
      name
      permissions
      gameOptions
    }
  }
`;

const SET_LOCALSTATE_CURRENT_USER = gql`
  mutation SET_LOCALSTATE_CURRENT_USER($id: ID!, $name: String!) {
    setCurrentUser(id: $id, name: $name, gameOption: $gameOption) @client
  }
`;

export { GET_LOCALSTATE_CURRENT_USER, SET_LOCALSTATE_CURRENT_USER };