import React from 'react';
import Navbar from './Components/Navbar.jsx'; // Correct path to Navbar
import HeroSection from './Components/HeroSection.jsx';
import FeatureSection from './Components/FeatureSection.jsx';
import WorkFlow from './Components/WorkFlow.jsx';
import Pricing from './Components/Pricing.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './Components/Footer.jsx';



export const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6' >
      <HeroSection />
      <FeatureSection />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
}

export default App;
