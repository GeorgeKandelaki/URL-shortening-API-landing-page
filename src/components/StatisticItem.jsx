import styled from "styled-components";

const StyledStatisticItem = styled.div`
    max-width: 40rem;
    background-color: #fff;
    text-align: left;
    padding: 0 3.2rem 4rem 3.2rem;
    border-radius: 0.5rem;
    align-self: stretch;
`;
const Icon = styled.div`
    display: inline-block;
    border-radius: 50%;
    padding: 2rem;
    background-color: var(--color-purple-950);
    line-height: 0;
    transform: translateY(-50%);
`;
const Heading = styled.h3`
    font-size: 2.4rem;
    color: var(--color-gray-950);
    font-weight: 900;
`;
const Description = styled.p`
    color: var(--color-gray-400);
    margin-top: 2rem;
    font-weight: 700;
`;

function StatisticItem({ stat, styles }) {
    return (
        <StyledStatisticItem style={styles}>
            <Icon>
                <img src={stat.icon} alt="just an icon" />
            </Icon>
            <Heading>{stat.heading}</Heading>
            <Description>{stat.description}</Description>
        </StyledStatisticItem>
    );
}

export default StatisticItem;
