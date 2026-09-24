import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from "../SectionTitle/SectionTitle";

import image1 from '../../images/testimonial/1.jpg';
import image2 from '../../images/testimonial/2.jpg';
import image3 from '../../images/testimonial/3.jpg';

import Shape1 from "../../images/testimonial/shape-1.png";
import Shape2 from "../../images/testimonial/shape-2.png";
import Shape3 from "../../images/testimonial/shape.svg";

const TestimonialData = [
    {
        id: "01",
        text: "It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.",
        author: "Bernard Rodgers",
        position: "Senior Engineer",
        image: image1
    },
    {
        id: "02",
        text: "It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.",
        author: "John Doe",
        position: "Software Developer",
        image: image2
    },
    {
        id: "03",
        text: "It uses a dictionary of over 200 Latin words, combined with handful the model sentence structures, to generate lorem ipsum which looks reasonable. The generated lorem ipsum is therefore always free from repetition injected humour or non-characteristic.",
        author: "Jane Smith",
        position: "Designer",
        image: image3
    }
]



const TestimonialSection = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="shape-1">
                <span></span>
                <img src={Shape1} alt="" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-12">
                        <SectionTitle subtitle='TESTIMONIAl' title='What Client Say?' />
                    </div>
                </div>
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <div className="wpo-testimonial-laft">
                                <ul className="slider-for">
                                    <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} arrows={false} fade={true}>
                                        {TestimonialData.map((testimonial, index) =>
                                            <li key={index}>
                                                <img src={testimonial.image} alt="" />
                                            </li>
                                        )}
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="wpo-testimonial-right slider-nav">
                                <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={1} swipeToSlide={true} focusOnSelect={true} >
                                    {TestimonialData.map((testimonial, index) => (
                                        <div className="wpo-testimonial-content" key={index}>
                                            <div className="shape">
                                                <img src={Shape3} alt="" />
                                            </div>
                                            <p>{testimonial.text}</p>
                                            <h2>{testimonial.author}</h2>
                                            <span>{testimonial.position}</span>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <span></span>
                <img src={Shape2} alt="" />
            </div>
        </section>
    );
}

export default TestimonialSection







