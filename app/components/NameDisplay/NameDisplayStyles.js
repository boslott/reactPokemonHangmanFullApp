import styled from 'styled-components';

const LetterBox = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${props => props.theme.pokeYellow};
  border-style: solid;
  border-color: ${props => props.theme.blue};
  border-width: 0.5rem;
  border-radius: 1rem;
  padding: 0.6rem;
  margin: 1rem;
  color: ${props => props.theme.blue};
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

const NameRow = styled.div`
  min-height: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export { NameRow };
export { LetterBox };