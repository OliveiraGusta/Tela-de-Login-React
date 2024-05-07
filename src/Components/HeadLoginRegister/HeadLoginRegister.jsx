import ThemeChangeButton from "../ThemeChangeButton/ThemeChangeButton";
import "./HeadLoginRegister.css";


function HeadLoginRegister(props) {
  return (
    <div className="content-head-login-register">
      <div className="head-theme-change">
        <ThemeChangeButton/>
      </div>
      <img id="head-logo-react-quimico" src="./src/assets/logos/logo-React-Quimico.png" alt="Logo do React, a representação de um atomo, ao seu lado direito escrito React Químico, todos os elemtnos em azul claro "/>
      {props.isRegistered ? 
      <p id="head-subtitle-login-register">Não tem uma conta? <a href="/cadastro">CADASTRE-SE AGORA</a></p>
        :
      <p id="head-subtitle-login-register">Já tem uma conta? <a href="/login">FAÇA SEU LOGIN</a></p>
      }
    </div> 
  )
}

export default HeadLoginRegister
