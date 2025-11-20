import styled from "styled-components";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import CTA from "./ui/CTA";

import Statistics from "./components/Statistics";
import Introduction from "./components/Introduction";

import iconBrandRecognition from "./assets/icon-brand-recognition.svg";
import iconDetailedRecords from "./assets/icon-detailed-records.svg";
import iconFullyCustomizable from "./assets/icon-fully-customizable.svg";

const StyledApp = styled.div`
    overflow-x: hidden;
`;

const stats = [
    {
        icon: iconBrandRecognition,
        description:
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        heading: "Brand Recognition",
    },
    {
        icon: iconDetailedRecords,
        description:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        heading: "Detailed Records",
    },
    {
        icon: iconFullyCustomizable,
        description:
            "improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        heading: "Fully Customizable",
    },
];

function App() {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <GlobalStyles />
            <StyledApp>
                <Header />
                <Introduction />
                <Statistics stats={stats} />
                <CTA />
                <Footer />
            </StyledApp>
        </>
    );
}

export default App;
