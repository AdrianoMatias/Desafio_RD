import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import desktop from '../../assets/desktop.png';
import tablet from '../../assets/tablet.png';
import mobile from '../../assets/mobile.png';

import {
        Cards, 
        ContainerTitle, 
        ContainerSubTitle, 
        Title, 
        SubTitle,
        Desktop,
        Tablet,
        Mobile,
        BtnRosa,
        BtnAmarelo,
        BtnRoxo,
        PageHome,
      
        } from './styles';

export default function Home() {
    return (
        <PageHome>
          <Header />
           <ContainerTitle>
                <Title>
                    Crie este site <strong>responsivo</strong> com <strong>REACT </strong> <br/>
                    utilizando <strong>styled-components</strong>
                </Title>
             </ContainerTitle>
            <ContainerSubTitle> 
                <SubTitle>
                        A fonte utilizada é a Open Sans de 300 a 800. <br/>
                        exemplo: "Open Sans", Helvetica, sans-serif, arial; <br/>
                        Já as cores são: <br/>
                        #007f56, #868686, #FE9481, #FCDA92 e #9C8CB9
                </SubTitle>
            </ContainerSubTitle>
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
          <Footer />
        </PageHome>
    ); 
}