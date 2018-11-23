import Link from 'next/link';

import NavStyles from './NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/play">
      <a>Play</a>
    </Link>
    <Link href="/scoreboard">
      <a>Scoreboard</a>
    </Link>
    <Link href="/history">
      <a>History</a>
    </Link>
    <Link href="/register">
      <a>Register</a>
    </Link>
    <Link href="/login">
      <a>Login</a>
    </Link>
    <button>Signout</button>
  </NavStyles>
);

export default Nav;