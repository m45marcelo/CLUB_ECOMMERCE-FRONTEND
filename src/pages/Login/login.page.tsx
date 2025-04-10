import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
//Components
import CustomButton from "../../components/Custom_Button/Custom_Button.component";
import Header from "../../components/Header/Header.componet";

//styles
import {
    LoginContainer,
    LoginContent,
    LoginHeadline,
    LoginInputContainer,
    LoginSubtitle,
} from "./login.styles";
import CustonInput from "../../components/Custon_Input/Custon_input.component";

const LoginPage = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const handleSubmitPress = (data: any) => {
        console.log({ data })
    }

    return (
        <>
            <Header />
            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>
                    <CustomButton startIcon={<BsGoogle size={18} />}>
                        Entrar com o Google
                    </CustomButton>

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustonInput
                            hasError={!!errors?.email}
                            placeholder="Digite seu e-mail"
                            {...register("email", { required: true })}
                        />
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustonInput
                            hasError={!!errors?.senha}
                            placeholder="Digete sua senha"
                            {...register("senha", { required: true })}
                        />
                    </LoginInputContainer>

                    <CustomButton
                        startIcon={<FiLogIn size={18} />}
                        onClick={handleSubmit(handleSubmitPress)}>
                        Entrar
                    </CustomButton>

                </LoginContent>
            </LoginContainer>
        </>
    );
};

export default LoginPage;
