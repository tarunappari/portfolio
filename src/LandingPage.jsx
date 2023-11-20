import styled from "styled-components";
import HomePage from "./components/Sections/HomePage/HomePage";
import Parallax from "./components/Sections/Parallax/Parallax";
import Projects from "./components/Sections/Projects/Projects";
import Contact from "./components/Sections/Contact/Contact";

const LandingPage = () => {
  return (
    <Container>
      <section id="HomePage">
        <HomePage />
      </section>
      <section id="Portfolio">
        <Parallax />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </Container>
  );
};

export default LandingPage;

let Container = styled.div`
  section {
    height: 100vh;
    scroll-snap-align: center;
  }
  #Projects{
    height: auto;
  }
`;
