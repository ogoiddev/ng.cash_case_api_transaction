import styled from "styled-components";

export const LoginRegisterPageContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${ props => props.theme.COLORS.PRIMARY }50;

  
  
  .forms-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background:  ${ props => props.theme.COLORS.CONTRAST };
    box-shadow: 0px 0px 2px ${({theme}) => theme.COLORS.CONTRAST};

    min-height: fit-content;
    width: 85%;
    min-width: 320px;
    max-width: 500px;

    padding: 0 12px;

    @media (max-width: 420px) {
      width: 100%;
    }

    h2 {
      margin: 32px 16px;
      text-align: left;
      min-height: fit-content;
      height: 20%;
      color: ${ props => props.theme.COLORS.PRIMARY };
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

        :disabled {
          background: ${ props => props.theme.COLORS.PRIMARY };
        }
      }

        :after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0px;
          height: 0;
          width: 100%;
          border-bottom: 4px solid ${ ({ theme }) => theme.COLORS.PRIMARY };
          border-radius: 50px 50px 0 0;
        }
      
    }
  }

  .form-ctn {
    display: flex;
    justify-content: center;
    min-height: fit-content;
    width: 100%;
    padding: 16px;
  }

`