import styled from "styled-components";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import CTA from "./ui/CTA";

import Statistics from "./components/Statistics";
import Introduction from "./components/Introduction";

const StyledApp = styled.div``;

function App() {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <GlobalStyles />
            <StyledApp>
                <Header />
                <Introduction />
                <Statistics />
                <CTA />
                <Footer />
            </StyledApp>
            ;
        </>
    );
}

export default App;
