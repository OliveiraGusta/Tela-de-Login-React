import React from 'react'
import ReactDOM from 'react-dom/client'

//Theme styles
import { ThemeChangeProvider } from './context/ThemeChangeContext';
import GlobalStyle from "./styles/global";

//Router configuration
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeChangeProvider>
      <GlobalStyle />
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </ThemeChangeProvider>
  </React.StrictMode>
);
