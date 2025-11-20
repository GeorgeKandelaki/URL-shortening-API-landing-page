import styled from "styled-components";
import StatisticItem from "./StatisticItem";
import React from "react";

const StyledStatistics = styled.div`
    background-color: #f0f1f6;
    padding: 9.6rem 12.8rem 12.8rem 12.8rem;

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Heading = styled.h2`
    color: var(--color-gray-950);
    font-size: 4rem;
    font-weight: 900;
`;
const Description = styled.p`
    max-width: 50rem;
    margin-top: 2rem;
    color: var(--color-gray-400);
    font-weight: 700;
    line-height: 1.7;
`;

const StatisticsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 7.2rem;
`;

const Line = styled.div`
    width: 5rem;
    height: 1rem;
    background-color: var(--color-blue-400);

    /* rotate: 90deg; */
`;

function Statistics({ stats }) {
    return (
        <StyledStatistics>
            <Heading>Advanced Statistics</Heading>
            <Description>
                Track how your links are performing across the web with our advanced statistics dashboard.
            </Description>

            <StatisticsContainer>
                {stats.map((stat, i) => (
                    <React.Fragment key={i}>
                        <StatisticItem stat={stat} styles={{ transform: `translateY(${i * 15}%)` }} />
                        {i < stats.length - 1 ? <Line /> : ""}
                    </React.Fragment>
                ))}
            </StatisticsContainer>
        </StyledStatistics>
    );
}

export default Statistics;
