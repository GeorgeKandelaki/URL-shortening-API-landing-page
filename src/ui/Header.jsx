import styled from "styled-components";

import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem 12.8rem;
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;
const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

function Header() {
    return (
        <StyledHeader>
            <NavContainer>
                <Logo />
                <Nav />
            </NavContainer>

            <AuthContainer>
                <Button size="small" variation="secondary">
                    Log In
                </Button>
                <Button size="small">Sign Up</Button>
            </AuthContainer>
        </StyledHeader>
    );
}

export default Header;
