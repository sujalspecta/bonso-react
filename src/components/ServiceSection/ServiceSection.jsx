import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../../api/Services";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard"
import ShapeOn from '../../images/service/service-shape.svg'


const ServiceSection = (props) => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots:true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
           
        ],
    };

    return (
        <section className="wpo-service-section section-padding">
            <div className="shape-1">
                <img src={ShapeOn} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-12">
                        <SectionTitle title='Our Services For Humanity' subtitle='Our Services' />
                    </div>
                </div>
                <div className="wpo-service-wrap">
                    <div className="wpo-service-slider">
                        <Slider {...settings}>
                            {Services.map((item, sindx) => (
                                <ServiceCard key={sindx} title={item.title} img={item.sImg} slug={item.slug} sdescription={item.description}/>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;









