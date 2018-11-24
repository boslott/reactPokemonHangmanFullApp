import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import NProgress from 'nprogress';

import FormStyle from '../Form/FormStyle';
import Error from '../ErrorMessage/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class SignIn extends Component {

  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[ { query: CURRENT_USER_QUERY } ]}
      >
        {(signin, { loading, error }) => {
          return (
            <FormStyle
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                NProgress.start();
                const res = await signin();
                this.setState({ email: '', password: '' });
                Router.push({
                  pathname: '/history',
                  query: { name: res.data.signin.name },
                }, '/history');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign Into Your Account</h2>
                <Error error={error} />
                <div className="input-group">
                  <label htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit">Sign In!</button>
              </fieldset>
            </FormStyle>
          )
        }}
      </Mutation>
    );
  }
}

export default SignIn;