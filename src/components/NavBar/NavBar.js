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
import {Link} from 'react-scroll';

const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavBarContainer>
                        <NavLogo onClick={closeMobileMenu}>
                            ChristopherSchiavino.com
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    <li><Link to="home" onClick={closeMobileMenu} spy={true} smooth={true}>Home</Link></li>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/' onClick={closeMobileMenu}>
                                    <li><Link to="about" onClick={closeMobileMenu} spy={true} smooth={true}>About</Link></li>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/' onClick={closeMobileMenu}>
                                    <li><Link to="contact" onClick={closeMobileMenu} spy={true} smooth={true}>Contact</Link></li>
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavBar;