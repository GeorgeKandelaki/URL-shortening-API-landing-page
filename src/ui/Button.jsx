import styled, { css } from "styled-components";

const variations = {
    primary: css`
        background-color: var(--color-blue-400);
        color: #fff;
        font-weight: 700;
        border-radius: 5rem;
    `,
    secondary: css`
        color: var(--color-gray-500);
        background-color: transparent;
        font-weight: 700;
    `,
    rectangle: css`
        border-radius: 0.8rem;
        background-color: var(--color-blue-400);
        color: #fff;
        font-weight: 700;
    `,
};
const sizes = {
    small: css`
        font-size: 1.4rem;
        padding: 1rem 1.8rem;
    `,
    medium: css`
        font-size: 1.8rem;
        padding: 1.2rem 2.2rem;
    `,
};

const Button = styled.button`
    border: none;
    font-family: inherit;
    outline: none;
    ${({ variation = "primary" }) => variations[variation]}
    ${({ size = "medium" }) => sizes[size]}
    transition: all 0.3s;

    &:hover {
        opacity: 0.5;
    }
`;

export default Button;
