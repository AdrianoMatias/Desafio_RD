import styled from 'styled-components';

export const ContainerTitle = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: center;
`;


export const Title = styled.h1 `
    color: var(--color-primary);
    text-align: center;
    font: 300 1.8rem 'Open Sans', sans-serif;
    
    strong {
        font: 800 1.8rem 'Open Sans', sans-serif;
        line-height: 2px;
    }

@media (min-width: 900px) {
    font: 300 2.8rem 'Open Sans', sans-serif;
    
    strong {
        font: 800 2.8rem 'Open Sans', sans-serif;
        line-height: 2px;
    }
}

`;

export const ContainerSubTitle = styled.div `
    margin-top: 1rem;
    padding: 10px 30px;
`;

export const SubTitle = styled.p `
    color: var(--color-secondary);
    text-align: center;
    font: 300 1rem 'Open Sans', sans-serif;
    line-height: 20px;

@media (min-width: 900px) {
    font: 300 1.5rem 'Open Sans', sans-serif;
    line-height: 25px;
}
    
`;
