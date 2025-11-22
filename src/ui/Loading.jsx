import styled, { keyframes } from "styled-components";

const StyledLoading = styled.div``;
const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    width: 8rem;
    height: 8rem;
    border: 12px solid #f3f3f3;
    border-top: 12px solid #3498db;
    border-radius: 50%;

    animation: ${rotate} 2s linear infinite;
`;

function Loading() {
    return (
        <StyledLoading>
            <Spinner></Spinner>
        </StyledLoading>
    );
}

export default Loading;
