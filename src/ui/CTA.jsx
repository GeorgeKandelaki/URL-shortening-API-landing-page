import styled from "styled-components";
import Button from "./Button";

import imageCTA from "../assets/bg-boost-desktop.svg";

const StyledCTA = styled.div`
    text-align: center;
    background-color: var(--color-purple-950);
    background-image: url("${imageCTA}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    padding: 4.8rem 3.2rem;
`;

const Heading = styled.h2`
    color: #fff;
    font-size: 4rem;
    margin-bottom: 2rem;
`;

function CTA() {
    return (
        <StyledCTA>
            <Heading>Boost Your Links Today</Heading>
            <Button size="medium">Get Started</Button>
        </StyledCTA>
    );
}

export default CTA;
