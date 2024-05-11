import FormLoginRegister from "../FormLoginRegister"
import HeadLoginRegister from '../HeadLoginRegister';
import { ContainerLoginRegister, ImageLogin, UiFormLoginRegister, UiHeadLoginRegister, UiLoginRegister } from "./styles";

const Register = () => {
    return (
        <ContainerLoginRegister>
            <ImageLogin/>
            <UiLoginRegister>
                <UiHeadLoginRegister>
                    <HeadLoginRegister />
                </UiHeadLoginRegister>
                <UiFormLoginRegister>
                <p>Bem-vindo(a) a plataforma <b>React</b> Químico</p>
                    <FormLoginRegister />
                </UiFormLoginRegister>
            </UiLoginRegister>

        </ContainerLoginRegister>
    )
}

export default Register
