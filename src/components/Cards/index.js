import React from 'react';

import desktop from '../../assets/desktop.png';
import tablet from '../../assets/tablet.png';
import mobile from '../../assets/mobile.png';

import { 
        Cards,
        Desktop,
        Tablet,
        Mobile,
        BtnRosa,
        BtnAmarelo,
        BtnRoxo,    
    } from './styles';

export default function Card() {
    return (
        <Cards>
                <li>
                    <Desktop>
                        <img src={desktop} alt="Desktop" />
                        <p>Site Responsivo DESKTOP</p>
                    </Desktop>
                    <span>
                        Quanto pressionado o botão <b>Leia mais...</b> o restante da informação deverá aparecer em scroll down.
                    </span>
                    <div>
                         <BtnRosa>Leia mais...</BtnRosa>
                    </div>
                </li>
                <li>
                    <Tablet>
                        <img src={tablet} alt="Tablet" />
                        <p>Site Responsivo TABLET</p>
                    </Tablet>
                    <span>
                        Quanto pressionado o botão <b>Leia mais...</b> o restante da informação deverá aparecer completa em um popup na tela.
                    </span>
                    <div>
                        <BtnAmarelo>Leia mais...</BtnAmarelo>
                    </div>
                </li>
                <li>
                    <Mobile>
                        <img src={mobile} alt="Mobile" />
                        <p>Site Responsivo MOBILE</p>
                    </Mobile>
                    <span>
                        Quanto pressionado o botão <b>alterar tema</b> modifique o tema do site para blackfriday a seu gosto.
                    </span>
                    <div>
                         <BtnRoxo>Alterar tema</BtnRoxo>
                    </div>
                </li>
            </Cards>
    );
}