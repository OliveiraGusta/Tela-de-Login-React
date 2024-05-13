import { createContext, useState } from "react";
import light from '../styles/themes/light.jsx';
import dark from '../styles/themes/dark.jsx';

export const ThemeChangeContext = createContext();

export const ThemeChangeProvider = ({ children }) => {
    const [theme, setTheme] = useState(light);

    
    function themeChange () {
        setTheme(theme.title === 'light' ? dark : light);
      }
    

    return (
        <ThemeChangeContext.Provider value={{theme, themeChange}}>
            {children}
        </ThemeChangeContext.Provider>
    );
};