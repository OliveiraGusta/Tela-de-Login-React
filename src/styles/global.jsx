import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat',system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
        color: ${props => props.theme.colors.text};
        background-color: ${props =>props.theme.colors.background};
    }

`;

export default GlobalStyle;