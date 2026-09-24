import Slider from 'react-slick';
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Projects from "../../api/projects";


const ProjectSection2 = () => {
    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return(
        <section className="wpo-project-section-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6 col-12">
                        <SectionTitle title="Complete Projects" subtitle="WHAT WE DO"/>
                    </div>
                </div>
            </div>
            <div className="wpo-project-content">
                <div className="container-fluid">
                    <div className="wpo-construction-wrap">
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Projects.slice(3, 8).map((project, pkey) => (
                                    <div className="grid" key={pkey}>
                                        <div className="images">
                                            <img src={project.pimg1} alt="img" />
                                        </div>
                                        <div className="text">
                                            <span>{project.subtitle}</span>
                                            <h2>{project.title}</h2>
                                            <Link onClick={ClickHandlar} to={`/project-single/${project.slug}`} className="theme-btn"><i
                                                className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection2