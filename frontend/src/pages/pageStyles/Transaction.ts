import styled from "styled-components";

export const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: fit-content;
  width: 100%;

  background: radial-gradient(circle, rgba(242,247,249,1) 0%, rgba(214,233,245,1) 80%, rgba(186,212,232,1) 100%);
  border-radius: 4px;
  
  box-shadow: 0 0 4px ${props => props.theme.COLORS.CONTRAST};
  * {

    color: ${props => props.theme.COLORS.PRIMARY};
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 345;
    width: 80%;
    height: fit-content;

    padding: 16px;

    justify-content: space-between;
    
    button {
      background: ${props => props.theme.COLORS.ACCENT_GREEN};
      color: ${props => props.theme.COLORS.CONTRAST};
      font-size: large;
      
      min-height: 43px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;

      border-radius: 4px;

      :hover {
        filter: brightness(1.2);
        transition: 0.3s;
      }

      * {
        color: ${props => props.theme.COLORS.CONTRAST};
      }
    }

    
    .by-cash-filter {
      display: flex;
      justify-content: space-between;

      gap: 8px;

      button {
        border: none;
        width: fit-content;
        margin: 8px;
        padding: 4px 16px;
      }
    }

    .clear-sort {
        border: none;
        width: 60%;

        margin: 8px;
        padding: 4px 16px;
    }


    .order-by {
      display: flex;
      justify-content: space-between;
      gap: 8px;
  
      button {
        padding: 4px;
        border: none;
        height: 36px;
        margin: 8px;
      }
    }
  }
  
  .form-transaction-ctn {
    width: 100%;
    height: 425px;

    h3 {
      text-align: center;
      margin: 16px auto;
      padding: 12px 0;

      font-size: x-large;
      font-weight: 800;
      
      background: ${props => props.theme.COLORS.PRIMARY}20;
      color: ${props => props.theme.COLORS.PRIMARY};

      width: 100%;
      height: 54px;
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
        
        span {

          font-size: large;
          font-weight: 600;
          margin: 8px;
        }


        color: ${props => props.theme.COLORS.PRIMARY};
        width: 50%;
        min-width: 100px;
        flex: 2;
        

        input {
          flex: 1;
          padding: 4px 16px;
          font-size: large;
          font-weight: 500;
          color: ${props => props.theme.COLORS.PRIMARY};
        }
      }
      
      button:active {
        transform: translate(1px, 1px);
      }
      button {
        width: 50%;
        min-width: 100px;
        flex: 1.2;
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
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    
    min-height: fit-content;
    
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

      padding: 12px 28px;
      font-weight: 600;
      max-width: 345px;


      background: ${props => props.theme.COLORS.PRIMARY}20;
      color: ${props => props.theme.COLORS.PRIMARY};

      .transfer-type {
        background: white;
        padding: 2px 8px;
        border-radius: 50px;
        width: fit-content;
      }
    }
  }
`;