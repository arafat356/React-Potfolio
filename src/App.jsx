import React from 'react';
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Experience from "./components/experience/Experience";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";

export const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials/>
    <Contact />
    <Footer />

    </>
    
    
  )
}

export default App;