import styled from "styled-components";

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: fit-content;
  width: 100%;

  background: ${props => props.theme.COLORS.CONTRAST};
  border-radius: 4px;

  box-shadow: 0 0 4px ${props => props.theme.COLORS.CONTRAST};

  .form-transaction-ctn {
    width: 100%;
    height: 245px;

    h3 {
      color: ${props => props.theme.COLORS.PRIMARY};
      margin: 16px; 
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;

      label {
        display: flex;
        flex-direction: column;


        color: ${props => props.theme.COLORS.PRIMARY};
        width: 50%;
        min-width: 100px;
        flex: 2;
        

        input {
          flex: 1;
          padding: 4px 16px;
        }
      }
      button {
        width: 50%;
        min-width: 100px;
        flex: 1.5;
        margin: 16px;
        border: none;
        background: ${props => props.theme.COLORS.ACCENT};
        font-size: x-large;
        font-weight: 600;

        :hover {
          filter: brightness(1.1)
        }
      }
    }
  }

  .history {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 8px;
    
    height: fit-content;
    width: 100%;
    padding: 32px;

    h3 {
      text-align: center;
      margin: 16px;
    }
    
    color: ${props => props.theme.COLORS.PRIMARY};
    
    .transaction-list {
      display: flex;
      flex-direction: column;
      margin: 8px 0;
      gap: 4px;

      border-bottom: 1px solid;
      border-top: 1px solid;
      border-radius: 4px;

      padding: 32px;
      font-weight: 600;


      background: ${props => props.theme.COLORS.PRIMARY}20;
      color: ${props => props.theme.COLORS.PRIMARY};
    }
  }
`;