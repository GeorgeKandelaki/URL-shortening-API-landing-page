import styled from "styled-components";
import toast from "react-hot-toast";
import { useState } from "react";

import { shortenURL } from "../services/apiURLShortener";

import shortenBg from "../assets/bg-shorten-desktop.svg";
import Button from "../ui/Button";
import Results from "./Results";

const StyledURLShortener = styled.form`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    width: calc(100% - 25.6rem);
    background-color: var(--color-purple-950);
    background-image: url("${shortenBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 4rem 4.8rem;
    border-radius: 1rem;

    display: flex;
    align-items: start;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 1rem 2.4rem;
    border-radius: 0.8rem;
`;

const Error = styled.p`
    color: var(--color-red-400);
    font-weight: 700;
    margin-top: 0.6rem;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function URLShortener() {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    async function handleShortening(e) {
        e.preventDefault();
        if (!url) {
            setError("Please add a link");
            return null;
        }

        setIsLoading(true);

        try {
            const data = await shortenURL(url);
            if (!data) return null;

            setResults((prevState) => [{ url: url, shortenedUrl: data.contents }, ...prevState]);
            setError("");
            setUrl("");
            toast.success("Successfully shortened");
        } catch (err) {
            console.error(err);
            toast.error("Oops! Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <Container>
            <StyledURLShortener onSubmit={handleShortening}>
                <div style={{ width: "85%" }}>
                    <StyledInput
                        style={error ? { outline: "var(--color-red-400)" } : {}}
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <Error>{error}</Error>
                </div>
                <Button variation="rectangle" size="medium">
                    Shorten It!
                </Button>
            </StyledURLShortener>

            <Results results={results} isLoading={isLoading} />
        </Container>
    );
}

export default URLShortener;
