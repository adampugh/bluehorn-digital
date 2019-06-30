import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/UI/Navbar';
import ProjectsHero from '../components/Projects/ProjectsHero';
import ProjectsAbout from '../components/Projects/ProjectsAbout';
import ContactBox from '../components/UI/ContactBox';
import Footer from '../components/UI/Footer';

const Projects = () => (
    <Layout>
        <Navbar/>
        {/* <ProjectsHero /> */}
        <ProjectsAbout />
        <ContactBox />
        <Footer />
    </Layout>
);

export default Projects;