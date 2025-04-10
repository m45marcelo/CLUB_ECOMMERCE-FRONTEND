import { BsCart3 } from 'react-icons/bs';

//Styles
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from './Header.styled';

//States
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login')
    }
    return (
        <HeaderContainer>
            <HeaderTitle>CLUB CLOTHING</HeaderTitle>
                <HeaderItems>
                    <HeaderItem>Explorar</HeaderItem>
                    <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
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