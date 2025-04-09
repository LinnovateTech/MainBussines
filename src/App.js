import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import HeroSection from "./components/HeroSection/index.js";
import styled from "styled-components";
import Serviços from "./components/Serviços/index.js";
import Projects from './components/Projetos/index.js';
import ProjectDetails from "./components/ProjectDetails/index.js";
import Contato from "./components/Contato/index.js";
import Footer from "./components/Footer/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [darkMode] = useState(true);
  const [modalState, setModalState] = useState({
    open: false,
    project: null
  });
  console.log(modalState)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Serviços />
          </Wrapper>
          <Projects
            modalState={modalState}
            setModalState={setModalState} />
          <Wrapper>
            <Contato />
          </Wrapper>
          <Footer />
          {modalState.open &&
            <ProjectDetails
              modalState={modalState}
              setModalState={setModalState} />
          }
        </Body>
      </Router>
    </ThemeProvider >
  )
}

export default App;
