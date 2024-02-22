import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import { GitHub } from './GitHub';
import Skills from './Skills';
import Contact from './Contact';


export const AllRoutes = () => {
  return (
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
