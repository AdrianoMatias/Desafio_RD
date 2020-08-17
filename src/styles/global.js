import { createGlobalStyle } from 'styled-components';

import background from '../assets/bg.jpg';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap" rel="stylesheet');

  :root {
    --color-primary: #007f56;
    --color-secondary:#868686;
    --color-third:#FCDA92;
    --color-fourth:#9C8CB9;
    --color-fifth:#FE9481;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${background});
    -webkit-font-smoothing: antialiased;
  }
  
  body, button, span {
    font: 300 'Open Sans', Helvetica, arial, sans-serif;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;