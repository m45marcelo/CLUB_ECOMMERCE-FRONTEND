import { FunctionComponent, InputHTMLAttributes } from "react";

//Styles
import { CustomInputContainer } from "./Custom_Input.styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
    hasError?: boolean
}

const CustonInput: FunctionComponent<CustomInputProps> = ({hasError, ...rest}) => {
    return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustonInput