import React, {useState} from 'react';

import ShowContent from '../ShowContent';

import btnClose from '../../assets/close.svg';

import { Modal } from './styles';

export default function Modals() {
    const [ modal, setModal] = useState(true);

    function handleCloseModal() {
        if (modal === false) {
            setModal(true);
        }else {
            setModal(false);
        }
      }

    return (
        <>
        { modal && 
            <Modal>
                <div className="content">
                    <div className="header">
                        <h1>Modal de Conteúdo</h1>
                        <button onClick={() => handleCloseModal()}>
                            <img src={btnClose} alt="Fechar"/>
                        </button>
                    </div>
                    <div>
                        <p>
                        Quando pressionado o botão Leia mais... o restante da informação deverá aparecer completa em um popup na tela. 
                        </p>
                        <ShowContent />
                    </div> 
                </div>
            </Modal>
        }   
        </>
    );
}