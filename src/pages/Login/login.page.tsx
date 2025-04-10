import Header from "../../components/Header/Header.componet"
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles"

const LoginPage = () => {
    return(
        <>
        <Header/>
        <LoginContainer>
            <LoginContent>
            <LoginHeadline>Entre com a sua conta</LoginHeadline>
            <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

            <LoginInputContainer>{/* Email input */}</LoginInputContainer>
            <LoginInputContainer>{/* Password input */}</LoginInputContainer>
            </LoginContent>
        </LoginContainer>
    </>
    )
}

export default LoginPage