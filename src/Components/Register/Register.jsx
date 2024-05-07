import "./Register.css";
import FormLoginRegister from "../FormLoginRegister/FormLoginRegister"
import HeadLoginRegister from '../HeadLoginRegister/HeadLoginRegister';

const Register = () => {
    return (
        <div className="container-login-register">
            <div id="image-login-register" />
            <div id="ui-login-register">
            <p>Bem-vindo(a) a plataforma <b>React</b> Químico</p>
                <div className="head-login-register">
                    <HeadLoginRegister />
                </div>
                <div className="form-login-register">
                    <FormLoginRegister />
                </div>
            </div>

        </div>
    )
}

export default Register
