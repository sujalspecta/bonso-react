
// images
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import patn1 from '../../images/partners/1.png'
import patn2 from '../../images/partners/2.png'
import patn3 from '../../images/partners/3.png'
import patn4 from '../../images/partners/4.png'
import patn5 from '../../images/partners/5.png'

const PartnersSecion = () => {


    const partnerData = [
        {
            id: 1,
            img: patn1,
        },
        {
            id: 2,
            img: patn2,
        },
        {
            id: 3,
            img: patn3,
        },
        {
            id: 4,
            img: patn4,
        },
        {
            id: 5,
            img: patn5,
        },
        {
            id: 6,
            img: patn3,
        },
    ]

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className="wpo-partners-section">
            <h2>partners</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">

                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {partnerData.map((partner, partnekye) => (
                                    <div className="grid" key={partnekye}>
                                        <img src={partner.img} alt='' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PartnersSecion;