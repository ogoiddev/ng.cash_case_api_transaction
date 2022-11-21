import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    max-width: 1937px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    /* border: 1px solid red; */
  }
  
  /* Works on Firefox */
  * {
    scrollbar-width: 0.5vw;
    scrollbar-color: #00d0ff70;
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.5vw;
  }
  
  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #00d0ff70;
    border-radius: 20px;
    border: none;
  }
  
  html {
    width: 100vw;
  }

  body {
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    width: 100vw;
    overflow-x: hidden;
    height: fit-content;
  
  }


  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
`