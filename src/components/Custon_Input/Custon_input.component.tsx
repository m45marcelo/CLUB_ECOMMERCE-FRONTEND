import React, { FunctionComponent, InputHTMLAttributes } from "react";

//Styles
import { CustomInputContainer } from "./Custom_Input.styles";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
    hasError?: boolean
}

const CustonInput: FunctionComponent<CustomInputProps> = React.forwardRef(
    (props, ref) => {
        return <CustomInputContainer {...props} ref={ref as any} />
    }
)

CustonInput.displayName = 'CustomInput'

export default CustonInput