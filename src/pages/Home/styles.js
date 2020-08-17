import styled from 'styled-components';

export const PageHome = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

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

export const Cards = styled.li `
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
        list-style: none;
        padding: 10px;

        @media (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }
   
    li {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
    }

    img {
        align-self: center;
    }


    p {
        color: #fff;
        margin: 20px;
        font-size: 1.4rem;
        font-family: 'Open Sans', sans-serif;
  }

   span {
    font-size: 1rem;
    margin: 5px;
    color: var(--color-secondary);
    font-family: 'Open Sans', sans-serif;

  }

  div {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
  }
`;

export const Desktop = styled.div `
        display: flex;
        flex-direction: column;
        padding: 10px;
        background: var(--color-fifth);
        margin-bottom: 10px;

`;

export const Tablet = styled(Desktop) `
        background: var(--color-third);
`;

export const Mobile = styled(Desktop) `
        background: var(--color-fourth);
`;

export const BtnRosa = styled.button `
      background: var(--color-fifth);
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;
      transition: background 0.2s;
      color: #fff;
      border: none;

`;

export const BtnAmarelo = styled(BtnRosa) `
      background: var(--color-third);
`;

export const BtnRoxo = styled(BtnRosa) `
      background:  var(--color-fourth);
     
`;

