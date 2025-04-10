import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

//Components
import CustomButton from "../../components/Custom_Button/Custom_Button.component"
import Header from "../../components/Header/Header.componet"

//styles
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles"

const LoginPage = () => {
    return(
        <>
        <Header/>
        <LoginContainer>
            <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>
            <CustomButton startIcon={<BsGoogle size={18}/>}>Entrar com o Google</CustomButton>

            <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

            <LoginInputContainer>{/* Email input */}</LoginInputContainer>
            <LoginInputContainer>{/* Password input */}</LoginInputContainer>

            <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>
            </LoginContent>
        </LoginContainer>
    </>
    )
}

export default LoginPage