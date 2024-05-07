import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

var isThemeLight = true;

function ThemeChangeButton(props) {
  
  const [iconTheme, setIconTheme] = useState(isThemeLight ? <DarkModeIcon/> : <LightModeIcon/> )

  function ChangeIcon() {
    setIconTheme(isThemeLight ? <LightModeIcon/> :  <DarkModeIcon/>);
    isThemeLight ?  isThemeLight = false :  isThemeLight = true; 
    }

  return (
    <div>
     <button onClick={ChangeIcon}>{iconTheme}</button>
    </div>
  )
}

export default ThemeChangeButton