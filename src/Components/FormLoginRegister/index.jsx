import { useState } from 'react';
import { Link }from "react-router-dom";
import { BtnLoginRegister, Container, InputField, RecallForget } from './styles';

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
        <Container>
            <form onSubmit={handleSubmit}>
                <h2> {props.isRegistered ? "Faça seu Login" : "Cadastre-se"}</h2>
                <InputField>
                    <input type="email" placeholder="Seu e-mail" required
                        onChange={(e) => { setEmail(e.target.value); }} />
                    <PersonIcon/>
                </InputField>
                <InputField>
                    <input type="text" placeholder="Sua senha" required
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <LockIcon/>
                </InputField>
                {props.isRegistered ?
                    <RecallForget>
                        <Container>
                            <input type="checkbox" />
                            LEMBRAR DE MIM
                        </Container>
                        <Link to="/esqueceu-senha">
                            ESQUECEU SUA SENHA?
                        </Link>
                    </RecallForget>
                    :
                    <InputField>
                        <input type="text" placeholder="Confirme sua senha" required
                            onChange={(e) => { setConfirmPassword(e.target.value); }} />
                        <LockPersonIcon/>
                    </InputField>
                }

                <BtnLoginRegister>
                    <button type="submit">{props.isRegistered ? "Logar" : "Cadastre-se"}</button>
                </BtnLoginRegister>

            </form>



        </Container>

    )


}

export default FormLoginRegister