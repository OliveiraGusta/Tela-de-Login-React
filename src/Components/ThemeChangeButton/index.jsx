import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { ButtonChange } from "./styles";

var isThemeLight = true;

function ThemeChangeButton(props) {
  
  const [iconTheme, setIconTheme] = useState(isThemeLight ? <DarkModeIcon/> : <LightModeIcon/> )

  function ChangeIcon() {
    setIconTheme(isThemeLight ? <LightModeIcon/> :  <DarkModeIcon/>);
    isThemeLight ?  isThemeLight = false :  isThemeLight = true; 
    }

  return (
    <div>
     <ButtonChange onClick={ChangeIcon}>{iconTheme}</ButtonChange>
    </div>
  )
}

export default ThemeChangeButton