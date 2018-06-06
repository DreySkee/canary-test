import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 500;
  }

  :focus { outline: none; }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;