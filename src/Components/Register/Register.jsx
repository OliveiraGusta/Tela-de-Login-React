import "./Register.css";
import FormLoginRegister from "../FormLoginRegister/FormLoginRegister"
import HeadLoginRegister from '../HeadLoginRegister/HeadLoginRegister';

const Register = () => {
    return (
        <div className="container-login-register">
            <div id="image-register" />
            <div id="ui-login-register">
                <div className="head-login-register">
                    <HeadLoginRegister />
                </div>
                <div className="form-login-register">
                <p>Bem-vindo(a) a plataforma <b>React</b> Químico</p>
                    <FormLoginRegister />
                </div>
            </div>

        </div>
    )
}

export default Register
