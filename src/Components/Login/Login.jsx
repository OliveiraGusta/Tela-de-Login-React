import "./Login.css";
import FormLoginRegister from "../FormLoginRegister/FormLoginRegister"
import HeadLoginRegister from '../HeadLoginRegister/HeadLoginRegister';

const Login = () => {
  return (
    <div className="container-login-register">
      <div id="ui-login-register">
        <div className="head-login-register">
          <HeadLoginRegister isRegistered />
        </div>
        <div className="form-login-register">
          <p>Bem-vindo(a) a plataforma <b>React</b> Químico</p>
          <FormLoginRegister isRegistered />
        </div>
      </div>
      <div id="image-login" />
    </div>
  )
}

export default Login
