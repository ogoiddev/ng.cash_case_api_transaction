import styled from "styled-components";

const LogButtonContainer = styled.button.attrs(attrProps => attrProps)`
  min-height: 43px;
  max-height: 53px;
  min-width: 100px;

  flex: 1;

  text-align: center;
  border: 1px solid ${attrProps => attrProps.theme.COLORS.CONTRAST };
  text-decoration: none;
  
  transition: all 0.3s ease-in-out;
  padding: 8px 16px;
  margin: ${attrProps => attrProps.type === 'submit' ? "12px" : "0"};

  font-size: 1.2rem;
  font-weight: 600;

  border-radius: 4px;
  
  background: ${attrProps => attrProps.type === 'submit' ? 'orange' : attrProps.theme.COLORS.CONTRAST};
  color: ${attrProps => attrProps.type === 'submit' ? attrProps.theme.COLORS.CONTRAST : attrProps.theme.COLORS.PRIMARY};
    
  
  :hover {
    border: 1px solid  ${({ theme }) => theme.COLORS.PRIMARY};
    filter: ${attrProps => attrProps.type === 'submit' ? "brightness(1.2)" : "brightness(1)"};
    :disabled {
      filter: brightness(1);
    }
  }
  
  ::active {
    transform: translate(1px, 1px);
  }

  :disabled {
    background: ${attrProps => attrProps.type === 'submit' ? 'orange' : attrProps.theme.COLORS.PRIMARY};
    color: ${attrProps => attrProps.type === 'submit' ? 'gray' : attrProps.theme.COLORS.CONTRAST};
  }

`;

export default LogButtonContainer;