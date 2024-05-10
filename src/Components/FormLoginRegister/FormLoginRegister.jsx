import { useState } from 'react';
import { Link }from "react-router-dom";
import "./FormLoginRegister.css"

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LockPersonIcon from '@mui/icons-material/LockPerson';


const FormLoginRegister = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        event.preventDefault();
        props.isRegistered
            ? alert("email: " + email + ", password: " + password)
            : AuthConfirmPassword();
    };

    function AuthConfirmPassword() {
        return confirmPassword == password
            ? alert("ENVIADO: email: " + email + ", Senha: " + password)
            : alert("SENHAS DIFERENTES: " + password + " != " + confirmPassword);
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2> {props.isRegistered ? "Faça seu Login" : "Cadastre-se"}</h2>
                <div className="input-field">
                    <input type="email" placeholder="Seu e-mail" required
                        onChange={(e) => { setEmail(e.target.value); }} />
                    <PersonIcon className="icon" />
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Sua senha" required
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <LockIcon className="icon" />
                </div>
                {props.isRegistered ?
                    <div className="recall-forget">
                        <div>
                            <input type="checkbox" />
                            LEMBRAR DE MIM
                        </div>
                        <Link to="/esqueceu-senha">
                            ESQUECEU SUA SENHA?
                        </Link>
                    </div>
                    :
                    <div className="input-field">
                        <input type="text" placeholder="Confirme sua senha" required
                            onChange={(e) => { setConfirmPassword(e.target.value); }} />
                        <LockPersonIcon className="icon" />
                    </div>
                }

                <div id="btn-login-register">
                    <button type="submit">{props.isRegistered ? "Logar" : "Cadastre-se"}</button>
                </div>

            </form>



        </div>

    )


}

export default FormLoginRegister