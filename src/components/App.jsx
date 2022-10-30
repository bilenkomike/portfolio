import Intro from './Intro/Intro';
import Header from './Header/Header';
import About from './About/About';
import Service from './Service/Service';
import Skills from './Skills/Skills';
import Technologies from './Technologies/Technologies'
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />      
      <About />
      <Service />
      <Skills />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
};
