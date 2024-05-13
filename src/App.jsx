import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeChangeContext } from "./context/ThemeChangeContext";
import GlobalStyle  from "./styles/global";
import { Outlet } from "react-router-dom";


function App() {
  const { theme } = useContext(ThemeChangeContext);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet/>
      </ThemeProvider>
    </div>
  )
}

export default App
