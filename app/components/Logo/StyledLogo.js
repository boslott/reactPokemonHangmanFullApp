import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 6rem;
  margin: 2rem 4rem 2rem 0;
  border: 1px dotted red;
  @media(max-width: 76.8rem) {
    width: 5rem;
  }
  @media(max-width: 48rem) {
    width: 4rem;
    margin-left: 2rem;
  }
`;

export default StyledLogo;