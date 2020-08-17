import React from 'react';

import drogaraia from '../../assets/drogaraia.png';
import drogasil from '../../assets/drogasil.png';
import farmasil from '../../assets/farmasil.png';
import rd from '../../assets/rd-small.png';
import bio from '../../assets/4bio.png';
import univers from '../../assets/univers.png';

import { Container } from './styles';

export default function Footer() {
    return (
        
        <Container>
            <footer>
                <p>RD 2017. Todos os direitos reservados</p>
                <img src={drogaraia} alt="DrogaRaia" />
                <img src={drogasil} alt="Drogasil" />
                <img src={farmasil} alt="Farmasil" />
                <img src={univers} alt="Univers" />
                <img src={bio} alt="4Bio" />
                <img src={rd} alt="RD" />
            </footer>
        </Container>
    );
}