import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import NProgress from 'nprogress';

import FormStyle from '../Form/FormStyle'; 
import Error from '../ErrorMessage/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_USER_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(createUser, { loading, error }) => {
          return (
            <FormStyle
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                NProgress.start();
                const res = await createUser();
                this.setState({ name: '', email: '', password: '', confirmPassword: '' });
                Router.push({
                  pathname: '/menu',
                  query: { name: res.data.createUser.name },
                }, '/menu');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Register For An Account</h2>
                <Error error={error} />
                <div className="input-group">
                  <label htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>

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

                <div className="input-group">
                  <label htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group">
                  <button type="submit">Create User!</button>
                </div>
              </fieldset>
            </FormStyle>
          )
        }}
      </Mutation>
    );
  }
}

export default Register;