import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Row = styled.div`
  min-width: 100%;
  /* min-height: 100%; */
  padding: 0;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  min-width: 50%;
  /* min-height: 60vh; */
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Row, Column };