import styled from "styled-components";

export const LoginRegisterContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  
  
  .forms-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: ${({theme}) => theme.COLORS.CONTRAST}10;
    box-shadow: 2px 4px 8px ${({theme}) => theme.COLORS.CONTRAST}50;

    min-height: fit-content;
    max-height: 80vh;
    width: 85%;
    min-width: 320px;
    max-width: 500px;

    padding: 0 16px;

    h2 {
      margin: 32px 16px;
      text-align: center;
      min-height: fit-content;
      height: 20%;
    }
    
    .toggle-login-register {
      display: flex;
      justify-content: space-between;
      position: relative;

      height: 15%;
      min-height: fit-content;
      width: 100%;

      button {
        border-radius: 4px 4px 0 0;
        font-size: 1.2rem;
        font-weight: 500;
      }

        :after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0px;
          height: 0;
          width: 100%;
          border-bottom: 8px solid ${({ theme }) => theme.COLORS.BUTTON_BACK_PRIMARY};
          border-radius: 50px 50px 0 0;
        }
      
    }
  }

  .form-ctn {
    display: flex;
    justify-content: center;
    height: fit-content;
    width: 100%;
    padding: 16px;
  }

`