import { createContext, useState } from "react";
import light from '../styles/themes/light.jsx';
import dark from '../styles/themes/dark.jsx';

import { ThemeProvider } from "styled-components";

export const ThemeChangeContext = createContext();

export const ThemeChangeProvider = ({ children }) => {
    const [theme, setTheme] = useState(light);

    const themeChange = () => {
        setTheme(theme.title === 'light' ? dark : light);
    }

    return (
        <ThemeChangeContext.Provider value={{ theme, themeChange }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeChangeContext.Provider>
    );
};