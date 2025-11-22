import styled from "styled-components";

import iconFacebook from "../assets/icon-facebook.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";

const StyledFooter = styled.footer`
    padding: 7.2rem 12.8rem;
    background-color: var(--color-gray-950);

    display: flex;
    align-items: top;
    justify-content: space-between;
`;

const Logo = styled.p`
    color: #fff;
    font-size: 3rem;
    font-weight: 900;
`;

const Container = styled.div`
    display: flex;
    align-items: top;
    gap: 9.6rem;
`;
const StyledUl = styled.ul`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const Socials = styled.ul`
    display: flex;
    align-items: top;
    gap: 2rem;

    margin-left: 4.8rem;
`;
const UlHeading = styled.p`
    margin-bottom: 2rem;
    font-weight: 900;
    color: #fff;
`;
const StyledLi = styled.li`
    font-weight: 500;
    color: var(--color-gray-500);
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover {
        opacity: 0.5;
    }
`;

function Footer() {
    return (
        <StyledFooter>
            <Logo>Shortly</Logo>
            <Container>
                <StyledUl>
                    <UlHeading>Features</UlHeading>

                    <StyledLi>Link Shortening</StyledLi>
                    <StyledLi>Branded Links</StyledLi>
                    <StyledLi>Analytics</StyledLi>
                </StyledUl>
                <StyledUl>
                    <UlHeading>Resources</UlHeading>

                    <StyledLi>Blog</StyledLi>
                    <StyledLi>Developers</StyledLi>
                    <StyledLi>Support</StyledLi>
                </StyledUl>
                <StyledUl>
                    <UlHeading>Company</UlHeading>

                    <StyledLi>About</StyledLi>
                    <StyledLi>Our Team</StyledLi>
                    <StyledLi>Careers</StyledLi>
                    <StyledLi>Contact</StyledLi>
                </StyledUl>
                <Socials>
                    <StyledLi>
                        <img src={iconFacebook} alt="icon of the socials" />
                    </StyledLi>
                    <StyledLi>
                        <img src={iconTwitter} alt="icon of the socials" />
                    </StyledLi>
                    <StyledLi>
                        <img src={iconPinterest} alt="icon of the socials" />
                    </StyledLi>
                    <StyledLi>
                        <img src={iconInstagram} alt="icon of the socials" />
                    </StyledLi>
                </Socials>
            </Container>
        </StyledFooter>
    );
}

export default Footer;
