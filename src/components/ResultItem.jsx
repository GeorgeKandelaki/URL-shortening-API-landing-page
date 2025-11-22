import { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledResultItem = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 1.2rem 2.4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.8rem;
`;

const OriginalURL = styled.a`
    font-weight: 700;
    cursor: pointer;
`;

const ShortenedURL = styled.a`
    color: var(--color-blue-400);
    cursor: pointer;
    font-weight: 700;
`;
const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
`;

function ResultItem({ result, onClick }) {
    const [buttonText, setButtonText] = useState("Copy");

    return (
        <StyledResultItem>
            <OriginalURL target="_blank" href={result.url}>
                {result.url}
            </OriginalURL>
            <Actions>
                <ShortenedURL target="_blank" href={result.shortenedUrl}>
                    {result.shortenedUrl}
                </ShortenedURL>
                <Button
                    variation="rectangle"
                    size="small"
                    onClick={() => {
                        onClick?.(result.shortenedUrl);
                        setButtonText("Copied!");
                        setTimeout(() => {
                            setButtonText("Copy");
                        }, 2500);
                    }}
                    style={buttonText === "Copied!" ? { backgroundColor: "var(--color-gray-900)" } : {}}
                >
                    {buttonText}
                </Button>
            </Actions>
        </StyledResultItem>
    );
}

export default ResultItem;
