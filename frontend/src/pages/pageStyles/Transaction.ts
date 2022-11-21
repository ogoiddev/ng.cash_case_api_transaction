import styled from "styled-components";

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  min-height: fit-content;
  width: 100%;
  background: ${props => props.theme.COLORS.CONTRAST};
  border-radius: 4px;
  box-shadow: 0 0 4px ${props => props.theme.COLORS.CONTRAST};

  .history {

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 8px;
    
    height: fit-content;
    padding: 16px;
    
    color: ${props => props.theme.COLORS.PRIMARY};

  .transaction-list {
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    gap: 4px;
  }
}`;