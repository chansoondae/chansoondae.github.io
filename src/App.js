import React, { useState } from "react";
import styled from "styled-components";
import Classifier from "./components/Classifier";
import Uploader from "./components/Uploader";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function App() {
    const [imageSrc, setImageSrc] = useState();

    return (
        <Container>
            <Uploader setImageSrc={setImageSrc} />
            <Classifier imageSrc={imageSrc} />
        </Container>
    );
}

export default App;