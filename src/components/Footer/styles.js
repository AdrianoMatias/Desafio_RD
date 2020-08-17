import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 6px;
        list-style: none;
        padding: 10px;

        @media (min-width: 900px) {
            display: grid;
            grid-template-columns: 8fr 1fr 1fr 1fr 1fr 6fr 1fr;
            grid-gap: 8px;
            list-style: none;
            padding: 10px;
        }
    }

    p {
        color: var(--color-secondary);
    }
`;