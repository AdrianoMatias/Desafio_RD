import React from 'react';

import { 
        ContainerTitle, 
        ContainerSubTitle, 
        Title, 
        SubTitle,
    } 
    from './styles';

export default function Text() {
    return (
        <>
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
        </>
    );
}
