import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";

const StyledApp = styled.div``;

function App() {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <GlobalStyles />
            <StyledApp></StyledApp>;
        </>
    );
}

export default App;
