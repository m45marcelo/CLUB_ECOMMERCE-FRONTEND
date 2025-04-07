import { BsCart3 } from 'react-icons/bs';

import './Header.styles.css'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './Header.styled';

const Header = () =>{
    return (
        <HeaderContainer>
            <HeaderTitle>CLUB CLOTHING</HeaderTitle>
                <HeaderItems>
                    <HeaderItem>Explorar</HeaderItem>
                    <HeaderItem>Login</HeaderItem>
                    <HeaderItem>Criar Conta</HeaderItem>
                    <HeaderItem>
                        <BsCart3 size={25}/>
                        <p style={{marginLeft:5}}>5</p>
                    </HeaderItem>
                </HeaderItems>
        </HeaderContainer>
    )
}

export default Header;