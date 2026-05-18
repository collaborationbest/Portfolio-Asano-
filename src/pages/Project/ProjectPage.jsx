import React from 'react'
import './ProjectPage.css';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const Project = () => {

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;