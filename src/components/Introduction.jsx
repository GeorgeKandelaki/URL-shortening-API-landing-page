import styled from "styled-components";
import introductionImage from "../assets/illustration-working.svg";

import Button from "../ui/Button";

const StyledIntroduction = styled.div`
    margin-top: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12.8rem;
`;
const Image = styled.div`
    width: 100%;
    transform: translateX(25%);
`;
const Container = styled.div``;
const Heading = styled.h1`
    font-size: 7.2rem;
    font-weight: 900;
    line-height: 1;
    color: var(--color-gray-950);
`;
const Description = styled.p`
    color: var(--color-gray-400);
    font-weight: 700;
    max-width: 43rem;
    margin-top: 1rem;
    margin-bottom: 4.8rem;
`;

function Introduction() {
    return (
        <StyledIntroduction>
            <Container>
                <Heading>More than just shorter links</Heading>
                <Description>
                    Build your brand's recognition and get detailed insights on how your links are performing
                </Description>
                <Button size="medium">Get Started</Button>
            </Container>
            <Image>
                <img src={introductionImage} alt="main image" />
            </Image>
        </StyledIntroduction>
    );
}

export default Introduction;
