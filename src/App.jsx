import React, { useState, useEffect, useRef } from 'react';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import WhyUs from './WhyUs';
import OurFocus from './OurFocus';
import Footer from './Footer';

const App = () => {
  const [bgImage, setBgImage] = useState("/paper_bg.jpg");

  // References for each section
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const whyUsRef = useRef(null);
  const ourFocusRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case 'intro':
              setBgImage('/brown_paper_4.jpg');
              break;
            case 'about':
              setBgImage('/brown_paper_3.jpg');
              break;
            case 'whyus':
              setBgImage('/brown_paper_2.jpg');
              break;
            case 'ourfocus':
              setBgImage('/brown_paper_1.jpg');
              break;
            default:
              setBgImage('/brown_paper_5.jpg');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,  // Trigger when 30% of the section is visible
    });

    // Observing each section
    if (introRef.current) observer.observe(introRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (whyUsRef.current) observer.observe(whyUsRef.current);
    if (ourFocusRef.current) observer.observe(ourFocusRef.current);

    return () => observer.disconnect();  // Cleanup observer
  }, []);

  return (
    <div
      className='flex flex-col'
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',  // Smooth transition
      }}
    >
      <Nav />
      <div id="intro" ref={introRef}>
        <Intro />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="whyus" ref={whyUsRef}>
        <WhyUs />
      </div>
      <div id="ourfocus" ref={ourFocusRef}>
        <OurFocus />
      </div>
      <Footer />
    </div>
  );
};

export default App;
