import styled from "styled-components";
import { devices } from "../../styles/devices";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;
  height: fit-content;

  @media ${devices.mobileS} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 80%;
  }
  @media ${devices.desktop} {
    width: 70%;
  }
  
  
  background: ${ props => props.theme.COLORS.PRIMARY }50;
  color: ${ props => props.theme.COLORS.CONTRAST };
  `

export const HomeContentContainer = styled.div`
    display: flex;
  flex-direction: column;

  margin-top: 64px;

  justify-content: flex-start;
  align-content: center;
  gap: 16px;

  width: 50%;
  min-width: 320px;
  
  
  .user-name {
    font-size: x-large;
    font-weight: 800;
    color: ${ props => props.theme.COLORS.ACCENT };
  }
  

  @media ${devices.mobileS} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 96%;
  }
  @media ${devices.tablet} {
    width: 84%;
  }
  @media ${devices.laptop} {
    width: 52%;
  }
  @media ${devices.desktop} {
    width: 40%;
  }

`

export const PerfilMenuCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  height: 135px;
  min-height: fit-content;

  border-radius: 4px;
  box-shadow: 0 0 4px ${ props => props.theme.COLORS.CONTRAST };

  padding: 16px;


  background: ${ props => props.theme.COLORS.CONTRAST }10;
  color: ${ props => props.theme.COLORS.CONTRAST };

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 4px

  }
  .user-name {
    font-size: x-large;
    font-weight: 800;
    color: ${ props => props.theme.COLORS.CONTRAST };
    margin-bottom: 16px;
  }

  .right-side {
    display: flex;
    gap: 12px

  }

  .icons-header {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${ props => props.theme.COLORS.ACCENT };
    border-radius: 50%;
    height: 36px;
    width: 36px;

    color: ${ props => props.theme.COLORS.PRIMARY };

    :hover {
      filter: brightness(1.2)
    }
  }



`

export const BalanceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;

  height: 200px;
  min-height: fit-content;

  padding: 16px;

  border-radius: 4px;
  box-shadow: 0 0 4px ${ props => props.theme.COLORS.CONTRAST };

  background: ${ props => props.theme.COLORS.CONTRAST };
  color: ${ props => props.theme.COLORS.PRIMARY };

  .balance {
    font-size: x-large;
    font-weight: 800;
    color: ${ props => props.theme.COLORS.ACCENT_GREEN };
  }
`