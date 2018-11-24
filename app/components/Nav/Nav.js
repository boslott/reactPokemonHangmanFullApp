import Link from 'next/link';
import { Mutation } from 'react-apollo';

import NavStyles from './NavStyles';
import User from '../User/User';
import Signout from '../Signout/Signout';

const Nav = () => (
  <User>
    {({  data: { me } }) => (
      <NavStyles data-test="nav">
        {me ? (
          <>
            <Link href="/play">
              <a>Play</a>
            </Link>
            <Link href="/scoreboard">
              <a>Scoreboard</a>
            </Link>
            <Link href="/history">
              <a>History</a>
            </Link>
            <Signout />
          </>
          ) : (
          <>
            <Link href="/register">
              <a>Register</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;