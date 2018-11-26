import styled from 'styled-components';

const GameStatsBoardStyles = styled.div`
  border: 1px dotted red;
  height: 80%;
  width: 100%;
  margin: 5rem 0;
  background-color: ${props => props.theme.statsBoardBG};
  border-style: solid;
  border-width: 1rem;
  border-color: ${props => props.theme.statsBoardBorder};
  border-radius: 2rem;
  font-size: 1.8rem;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  text-shadow: 0 0.06rem 0.3rem ${props => props.theme.blue};
  & h2 {
    margin: 0;
    /* text-transform: uppercase; */
    color: ${props => props.theme.pokeYellow};
    text-shadow: 0 0.1rem 0.4rem ${props => props.theme.blue};
  }
  & div {
    text-align: left;
  }
  & span {
    margin-left: 2rem;
    text-align: left;
  }
`;

export default GameStatsBoardStyles;