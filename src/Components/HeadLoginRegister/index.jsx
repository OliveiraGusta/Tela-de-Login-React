import ThemeChangeButton from "../ThemeChangeButton";
import { Link }from "react-router-dom";
import { ContentHeadLoginRegister, HeadLogoReactQuimico, HeadSubtitleLoginRegister, HeadThemeChange } from "./style";




function HeadLoginRegister(props) {
  return (
      <ContentHeadLoginRegister>
      <HeadThemeChange>
        <ThemeChangeButton/>
      </HeadThemeChange>
      <HeadLogoReactQuimico src="./src/assets/logos/logo-React-Quimico.png" alt="Logo do React, a representação de um atomo, ao seu lado direito escrito React Químico, todos os elementos em azul claro "/>
      {props.isRegistered ? 
      <HeadSubtitleLoginRegister>Não tem uma conta?  <Link to="/cadastro">CADASTRE-SE AGORA</Link></HeadSubtitleLoginRegister>
        :
      <HeadSubtitleLoginRegister>Já tem uma conta? <Link to="/">FAÇA SEU LOGIN</Link></HeadSubtitleLoginRegister>
      }
    </ContentHeadLoginRegister>
  )
}

export default HeadLoginRegister
