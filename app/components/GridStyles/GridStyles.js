import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 67vh;
`;

const Row = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  min-width: 50%;
  min-height: 53vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;

export { Container, Row, Column };