import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    :root {
        --Black: #1A1A1A;
        --DarkBlue: #374151;
        --White: #FFFFFF;
        --LightBlue: #00D8FF;
        --LightBlueSecondary: #0bafcb;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat',system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
        color: var(--Black);
    }

`;

export default GlobalStyle;