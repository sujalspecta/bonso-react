import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero3 from '../../components/hero3/hero3';
import About from '../../components/about/about';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import CtaSection from '../../components/CtaSection/CtaSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-2.svg'
const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <Hero3 />
            <About />
            <TeamSection />
            <ProjectSection2 />
            <CtaSection />
            <TestimonialSection />
            <PricingSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;