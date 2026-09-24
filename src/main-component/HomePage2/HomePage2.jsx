import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import About from '../../components/about/about';
import PartnersSecion from '../../components/PartnersSecion/PartnersSecion';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import FunFact from '../../components/FunFact/FunFact';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'} Logo={Logo}/>
            <Hero2 />
            <About />
            <PartnersSecion/>
            <ServiceSection />
            <ProjectSection2 />
            <FunFact/>
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;