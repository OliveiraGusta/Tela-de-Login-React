import { useState, useContext } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { ThemeChangeContext } from "../../context/ThemeChangeContext";
import { ButtonChange } from "./styles";


function ThemeChangeButton() {
  const { theme, themeChange } = useContext(ThemeChangeContext);
  const [iconTheme, setIconTheme] = useState(theme.title === 'light' ? <DarkModeIcon/> : <LightModeIcon/>)

  const toggleTheme = () =>{
    themeChange();
    setIconTheme(theme.title === 'light' ?  <LightModeIcon/> : <DarkModeIcon/>)
  }

  return (
    <div>
     <ButtonChange onClick={toggleTheme}>{iconTheme}</ButtonChange>
    </div>
  )
}

export default ThemeChangeButton