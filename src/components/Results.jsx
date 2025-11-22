import styled from "styled-components";

import Loading from "../ui/Loading";
import ResultsItem from "./ResultItem";

const StyledResults = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
    transform: translateY(-30%);
`;

function Results({ results, isLoading }) {
    return (
        <StyledResults>
            {isLoading ? (
                <Loading />
            ) : (
                results.map((result) => (
                    <ResultsItem
                        result={result}
                        key={result.shortenedUrl}
                        onClick={() => {
                            navigator.clipboard.writeText(result.shortenedUrl);
                        }}
                    />
                ))
            )}
        </StyledResults>
    );
}

export default Results;
