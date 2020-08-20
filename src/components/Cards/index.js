import React, { useState } from 'react';

import Modal from '../Modal';

import desktop from '../../assets/desktop.png';
import tablet from '../../assets/tablet.png';
import mobile from '../../assets/mobile.png';
import background from '../../assets/bg_black.jpg';

import { 
        Cards,
        Desktop,
        Tablet,
        Mobile,
        BtnRosa,
        BtnAmarelo,
        BtnRoxo,
    } from './styles';
import ShowContent from '../ShowContent';

export default function Card() {
    const [ show, setShow ]   = useState(false);
    const [ modal, setModal]  = useState(false);

    function handleShowContent() {
        if (show === false) {
            setShow(true);
        }else {
            setShow(false);
        }
    }

    function handleShowModal() {
      if (modal === false) {
          setModal(true);
      }else {
          setModal(false);
      }
    }

    function handleBackground() {
      document.body.style = `background: url(${background}) no-repeat`;
    }

    return (
        <>
            <Cards>
                    <li id="rosa">
                        <Desktop>
                            <img src={desktop} alt="Desktop" />
                            <div>
                                <h3>Site Responsivo DESKTOP</h3>
                            </div>
                        </Desktop>
                        <span>
                            Quando pressionado o botão <b>Leia mais...</b> o restante da informação deverá aparecer em scroll down.
                            { show && <ShowContent  />  }
                        </span>
                        <div>
                            <BtnRosa onClick={() => handleShowContent()}>Leia mais...</BtnRosa>
                        </div>
                    </li>
                    <li id="amarelo">
                        <Tablet>
                            <img src={tablet} alt="Tablet" />
                            <h3>Site Responsivo TABLET</h3>
                        </Tablet>
                        <span>
                            Quando pressionado o botão <b>Leia mais...</b> o restante da informação deverá aparecer completa em um popup na tela. 
                        </span>
                        <div>
                            <BtnAmarelo onClick={() => handleShowModal()}>Leia mais...</BtnAmarelo>
                        </div>
                    </li>
                    <li id="roxo">
                        <Mobile>
                            <img src={mobile} alt="Mobile" />
                            <h3>Site Responsivo MOBILE</h3>
                        </Mobile>
                        <span>
                            Quando pressionado o botão <b>alterar tema</b> modifique o tema do site para blackfriday a seu gosto.
                        </span>
                        <div>
                            <BtnRoxo onClick={() => handleBackground()}>Alterar tema</BtnRoxo>
                        </div>
                    </li>
                </Cards>
               { modal && <Modal />}
            </> 
    );
}