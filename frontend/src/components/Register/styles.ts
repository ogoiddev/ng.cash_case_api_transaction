import styled from "styled-components";

const RegisterContainer = styled.form`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  gap: 8px;

  span {
    min-height: fit-content;
    opacity: 0.9;
    width: 100%;
    padding: 8px;
  }
`;

export default RegisterContainer;