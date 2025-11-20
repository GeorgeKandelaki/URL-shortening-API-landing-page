import styled, { css } from "styled-components";

const variations = {
    primary: css`
        background-color: var(--color-blue-400);
        color: #fff;
        font-weight: 700;
    `,
    secondary: css`
        color: var(--color-gray-500);
        background-color: transparent;
        font-weight: 700;
    `,
};
const sizes = {
    small: css`
        font-size: 1.8rem;
        padding: 1rem 2.4rem;
        border-radius: 5rem;
    `,

    medium: css`
        font-size: 2rem;
        padding: 1.8rem 4rem;
        border-radius: 5rem;
    `,
    rectangle: css`
        font-size: 2rem;
        padding: 1.8rem 4rem;
        border-radius: 0.5rem;
    `,
};

const Button = styled.button`
    border: none;
    font-family: inherit;
    ${({ variation = "primary" }) => variations[variation]}
    ${({ size = "medium" }) => sizes[size]}
    transition: all 0.3s;

    &:hover {
        opacity: 0.5;
    }
`;

export default Button;
