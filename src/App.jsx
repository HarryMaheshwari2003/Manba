import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FullMainPage from './FullMainPage';
import AboutMain from './AboutMain';
import OurServices from './OurServices';
import ContactForm from './ContactForm';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='relative'>
      <Routes>
        <Route path="/" element={<FullMainPage />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
