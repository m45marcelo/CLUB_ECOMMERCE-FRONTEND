import React, { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { CustomButtonContainer, IconContainer } from "./Custom_Button.styles";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    startIcon?: ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ children, startIcon, ...rest }) => {
    return (
        <CustomButtonContainer {...rest}>
            {startIcon && <IconContainer>{startIcon}</IconContainer>}
            {children}
        </CustomButtonContainer>
    )
};

export default CustomButton;
