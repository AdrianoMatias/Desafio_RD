import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, Menu } from './styles';

import logo from '../../assets/rd.png';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Logo Raia Drogasil" />
            </Link>
            
            <Menu>
                <Nav to="/">HTML5</Nav>
                <Nav to="/">CSS3</Nav>
                <Nav to="/">JAVASCRIPT</Nav>
                <Nav to="/">REACT</Nav>
                <Nav to="/">REDUX</Nav>    
            </Menu>       
        </Container>
    );
}