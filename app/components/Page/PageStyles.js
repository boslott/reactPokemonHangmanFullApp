import styled from 'styled-components';

const StyledPage = styled.div`
  background:  ${props => props.theme.ltestBlue};
  color: ${props => props.theme.black};
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export  { StyledPage, Inner };