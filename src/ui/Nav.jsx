import styled from "styled-components";

const StyledNav = styled.nav``;
const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`;
const StyledLi = styled.li`
    color: var(--color-gray-500);
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        color: var(--color-gray-950);
    }
`;

function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>Features</StyledLi>
                <StyledLi>Pricing</StyledLi>
                <StyledLi>Resources</StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

export default Nav;
