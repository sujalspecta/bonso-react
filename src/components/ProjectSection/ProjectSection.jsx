import { useState } from "react";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Projects from "../../api/projects";


const ProjectSection = () => {

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

    const [openTab, setOpenTab] = useState("construction")
    const handleTabClick = (id) => {
        setOpenTab(id)
    }

    return (
        <section className="wpo-project-section section-padding">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col col-lg-6 col-12">
                        < SectionTitle subtitle="WHAT WE DO" title="Complete Projects" />
                    </div>
                </div>
                <div className="wpo-project-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-project-item">
                                <ul className="nav">
                                    <li className="nav-item" >
                                        <button onClick={() => handleTabClick("construction")} className={`nav-links ${openTab == "construction" ? "active" : ""}`}>Construction</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={() => handleTabClick("engeneering")} className={`nav-links ${openTab == "engeneering" ? "active" : ""}`}>Engeneering</button>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={() => handleTabClick("industry")} className={`nav-links ${openTab == "industry" ? "active" : ""}`}>Industry</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-project-content">
                <div className="container-fluid">
                    {openTab == "construction" &&
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Projects.slice(0, 4).map((project, pkey) => (
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
                    }
                    {openTab == "engeneering" &&
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Projects.slice(3, 7).map((project, pkey) => (
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
                    }
                    {openTab == "industry" &&
                        <div className="wpo-engeneer-slider">
                            <Slider {...settings}>
                                {Projects.slice(5, 9).map((project, pkey) => (
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
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;








