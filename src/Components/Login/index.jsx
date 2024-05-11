import { ContainerLoginRegister, UiLoginRegister, UiHeadLoginRegister, UiFormLoginRegister, ImageLogin } from "./styles";
import FormLoginRegister from "../FormLoginRegister"
import HeadLoginRegister from '../HeadLoginRegister';

const Login = () => {
  return (
    <ContainerLoginRegister>
      <UiLoginRegister>
        <UiHeadLoginRegister>
          <HeadLoginRegister isRegistered />
        </ UiHeadLoginRegister >
        <UiFormLoginRegister>
          <p>Bem-vindo(a) a plataforma <b>React</b> Químico</p>
          <FormLoginRegister isRegistered />
        </ UiFormLoginRegister>
      </ UiLoginRegister >
      <ImageLogin />
    </ ContainerLoginRegister >
  )
}

export default Login
