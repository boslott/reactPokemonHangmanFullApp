import styled from 'styled-components';

const GameMenuStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h2 {
    display: block;
    margin: 0;
    padding: 0;
    font-size: 5rem;
    color: ${props => props.theme.dkBlue};
  }
  & p {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    color: ${props => props.theme.dkBlue};
    text-align: center;
  }
  & div {
    margin: 4rem;
    text-align: center;
  }
  & button,
  & button:link,
  & button:visited {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${props => props.theme.dkBlue};
    background-color: ${props => props.theme.pokeYellow};
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    border-color: ${props => props.theme.blue};
    border-width: 0.2rem;
    margin: 2rem 3rem;
    cursor: pointer;
    &:hover, &:focus {
      transform: translateY(-3px);
      outline: none;
      /* background-color: ${props => props.theme.blue}; */
      /* color: ${props => props.theme.pokeYellow}; */
      box-shadow: 0 1rem 2rem ${props => props.theme.dkGray};
      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }
    &:active {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 .5rem 1rem black;
    }
  }
`;

export default GameMenuStyles;