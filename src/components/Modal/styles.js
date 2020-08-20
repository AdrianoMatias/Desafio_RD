import styled from 'styled-components';

export const Modal = styled.div `
    background-color: #0e0a14ef;

    height: 100vh;
    width: 60vw;

    position: fixed;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 400ms;

    @media (max-width: 900px) {
        height: 100vh;
        width: 100vw;

    .content {
            background: #fff;
            width: 400px;
            color: #000;
        }
    }

    .content {
        background: #fff;
        width: 600px;
        color: #000;
        
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 48px;
        border-radius: 4px;
        margin: 10px 20px;
    }

    a {
        width: 20px;
        height: 20px;

        display: flex;

        font-size: 0.01px;

    }

    .info {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        color: #000;
        margin: 15px 20px;
    }

`;