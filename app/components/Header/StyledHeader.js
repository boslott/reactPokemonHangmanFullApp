import styled from 'styled-components';

const StyledHeader = styled.header`
  /* position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  background-color: #fff; */
  .bar {
    border-bottom: 1rem solid ${props => props.theme.black}; 
    background-color: ${props => props.theme.red};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    .logo {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .mainTitle {
      min-width: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 5rem;
    }

  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    background-color: ${props => props.theme.white};
  }
`;

export default StyledHeader;