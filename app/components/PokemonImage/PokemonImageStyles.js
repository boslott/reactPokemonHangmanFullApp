import styled from 'styled-components';

const PokemonImageStyles = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }
  .hidden {
    filter: contrast(0%) brightness(50%);
  }
`;

const HiddenPokemonImageStyles = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export { PokemonImageStyles, HiddenPokemonImageStyles };