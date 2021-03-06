import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const FormStyle = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.offWhite};
  /* background: rgba(0, 0, 0, 0.02); */
  border: 5px solid ${props => props.theme.white};
  padding: 4rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  text-transform: uppercase;
  label {
    margin: 0 1rem 1rem 0;
    width: 25%;
    text-align: center;

  }
  input,
  textarea,
  select {
    width: 60%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;
    width: 100%;
    text-align: center;

    .input-group {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 2rem 0;
    }

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default FormStyle;
