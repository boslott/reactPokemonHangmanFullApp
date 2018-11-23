import Link from 'next/link';

import StyledHeader from './StyledHeader';
import Logo from '../Logo/Logo';
import MainTitle from '../MainTitle/MainTitle';
import Nav from '../Nav/Nav';

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <MainTitle />
    </div>
    <div className="sub-bar">
      <Nav />
      {/* <p>Search</p> */}
    </div>
  </StyledHeader>
);

export default Header;