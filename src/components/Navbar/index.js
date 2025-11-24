import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleLinkClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <NavLink onClick={() => handleLinkClick('sobre')}>
                        <Span>LinnovateTech</Span>
                    </NavLink>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => setIsOpen(!isOpen)} />
                </MobileIcon>
                <NavItems>
                    <NavLink onClick={() => handleLinkClick('sobre')}>Sobre nós</NavLink>
                    <NavLink onClick={() => handleLinkClick('servicos')}>Serviços</NavLink>
                    <NavLink onClick={() => handleLinkClick('servicos')}>Experiencia</NavLink>
                    <NavLink onClick={() => handleLinkClick('projetos')}>Projetos</NavLink>
                    <NavLink onClick={() => handleLinkClick('contato')}>Contato</NavLink>
                </NavItems>
                {isOpen && (
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink onClick={() => handleLinkClick('sobre')}>Sobre nós</MobileLink>
                        <MobileLink onClick={() => handleLinkClick('servicos')}>Serviço</MobileLink>
                        <MobileLink onClick={() => handleLinkClick('servicos')}>Experiencia</MobileLink>
                        <MobileLink onClick={() => handleLinkClick('projetos')}>Projetos</MobileLink>
                        <MobileLink onClick={() => handleLinkClick('contato')}>Contato</MobileLink>
                    </MobileMenu>
                )}
            </NavbarContainer>
        </Nav>
    );
}

export default Navbar;