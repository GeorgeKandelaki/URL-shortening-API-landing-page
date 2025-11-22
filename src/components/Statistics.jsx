import styled from "styled-components";
import StatisticItem from "./StatisticItem";
import React from "react";
import URLShortener from "./URLShortener";

const StyledStatistics = styled.div`
    position: relative;
    background-color: #f0f1f6;
    padding: 12.8rem 12.8rem;

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
    margin-top: 2rem;
    color: var(--color-gray-400);
    font-weight: 700;
    line-height: 1.7;
`;

const StatisticsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 6.4rem;
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
            <URLShortener />
            <div style={{ width: "100%", textAlign: "center" }}>
                <Heading>Advanced Statistics</Heading>
                <Description>
                    Track how your links are performing across the web with <br /> our advanced statistics dashboard.
                </Description>

                <StatisticsContainer>
                    {stats.map((stat, i) => (
                        <React.Fragment key={i}>
                            <StatisticItem stat={stat} styles={{ transform: `translateY(${i * 15}%)` }} />
                            {i < stats.length - 1 ? <Line /> : ""}
                        </React.Fragment>
                    ))}
                </StatisticsContainer>
            </div>
        </StyledStatistics>
    );
}

export default Statistics;
