import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, 
    NavBarContainer, 
    NavLogo,  
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks } from './NavBar.elements';

const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavBarContainer>
                        <NavLogo to="home" onClick={closeMobileMenu} spy={true} smooth={true}>
                            Cschiavino.com
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="home" onClick={closeMobileMenu} spy={true} smooth={true}>Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="about" onClick={closeMobileMenu} spy={true} smooth={true}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact" onClick={closeMobileMenu} spy={true} smooth={true}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavBar;