import styled from 'styled-components'

interface ButtonProps {
    color?: string;
}

export const Button = styled.a<ButtonProps>`
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    border: 2px solid var(--clr-accent);
    color: ${props => props.color ? props.color : 'black'};
    background-image: var(--button-gradient);
    background-size: 200%;
    transition: background-position 1s;

    :hover, :focus {
        background-position: right;
    }
`