import styled from 'styled-components';
import { GiBrain } from 'react-icons/gi';
import { Link } from 'react-scroll';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavBarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 40px;

${Container}
`;

export const NavLogo = styled.h1`
color: #fff;
justify-self: flex-start;
text-decoration: none;
font-size: 2rem;
align-items: center;
`;

export const NavIcon = styled(GiBrain)`
margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
aligh-tems: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
        border: none;
    }
}
`

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
cursor: pointer;

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`
