import styled from "styled-components";

export const LabelInputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  min-height: fit-content;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  
  p {
    font-weight: 600;
    font-size: 1.2rem;
    
    padding: 8px;
  }
  
  
  
  
  input {
    min-height: 43px;
    width: 100%;
    padding: 8px;
    
    font-size: 1.1rem;
  }
`