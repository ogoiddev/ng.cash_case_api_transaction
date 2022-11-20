import styled from "styled-components";

const LogButtonContainer = styled.button.attrs(props => props)`
  min-height: 43px;
  min-width: 100px;

  flex: 1;

  text-align: center;
  border: 1px solid transparent;
  text-decoration: none;
  
  transition: all 0.3s ease-in-out;
  padding: 8px 16px;
  margin: ${props => props.type === 'submit' ? "12px" : "0"};

  font-size: 1.2rem;
  font-weight: 600;

  border-radius: 4px;
  
  background: ${props => props.type === 'submit' ? props.theme.COLORS.BUTTON_BACK_PRIMARY : "transparent"};
  color: ${props => props.type === 'submit' ? props.theme.COLORS.BUTTON_TEXT_PRIMARY : props.theme.COLORS.BUTTON_TEXT_CONTRAST};

  
  
  :hover {
    border: 1px solid  ${({ theme }) => theme.COLORS.BUTTON_BACK_PRIMARY};
    filter: ${props => props.type === 'submit' ? "brightness(1.2)" : "brightness(1)"};
    :disabled {
      filter: brightness(1);
    }
  }

  ::active {
    transform: translate(1px, 1px);
  }

  :disabled {
    background: ${({theme}) => theme.COLORS.BUTTON_BACK_PRIMARY};
    color: ${({theme}) => theme.COLORS.BUTTON_TEXT_PRIMARY};
  }

`;

export default LogButtonContainer;