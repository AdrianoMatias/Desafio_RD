import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    border-bottom: 1px solid #ccc;
`;

export const Menu = styled.div `
    display: flex;
    align-items: center;
`;


export const Nav = styled(Link) `
    margin-left: 1rem;
    text-decoration: none;
    color: #007f56;
    transition: opacity 0.2s;
    font-family: "Open Sans", sans-serif;

    &:hover {
        opacity: 0.7;
    }
`;
