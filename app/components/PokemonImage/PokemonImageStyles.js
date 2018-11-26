import styled from 'styled-components';

const PokemonImageStyles = styled.div`
  min-width: 100%;
  min-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  & img {
    width: 100%;
    height: 40rem;
  }
  .hidden {
    filter: contrast(0%) brightness(50%);
  }
`;

export { PokemonImageStyles };