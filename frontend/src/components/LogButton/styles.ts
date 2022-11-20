import styled from "styled-components";

const LogButtonContainer = styled.button`
  min-height: 43px;
  min-width: 200px;

  text-align: center;
  border: none;
  text-decoration: none;
  
  :hover {
    filter: brightness(1.2);
  }

  ::active {
    transform: translate(1px, 1px);
  }

  background: ${({theme}) => theme.COLORS.BUTTON_BACK_PRIMARY};
  color: ${({theme}) => theme.COLORS.BUTTON_TEXT_PRIMARY};
`;

export default LogButtonContainer;