import React from "react";
import { Navigation, A11y, Parallax } from "swiper/modules"; // Added Parallax module
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/parallax'; // Added Parallax style architecture
import { Link } from 'react-router-dom';
import hero3 from '../../images/slider/slide-13.jpg';
import hero4 from '../../images/slider/slide-4.jpg';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Hero4 = () => {
    return (
        <section className="wpo-hero-slider wpo-hero-style-2">
            <Swiper
                // Installed modules including Parallax
                modules={[Navigation, A11y, Parallax]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation={true}
                
                /* ANTI-COLLAPSE ARCHITECTURE & DOM OBSERVERS */
                observer={true}
                observeParents={true}
                style={{ width: "100%", height: "100vh" }} 
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        if (swiper && !swiper.destroyed) {
                            swiper.update();
                        }
                    }, 150);
                }}
            >
                {/* Slide 1 */}
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div 
                        className="slide-inner slide-bg-image" 
                        style={{ backgroundImage: `url(${hero3})`, height: "100%", width: "100%" }}
                    >
                        <div className="container-fluid">
                            <div className="slide-content">
                                {/* Added staggered parallax layout values */}
                                <div className="slide-title" data-swiper-parallax="-400">
                                    <h2>We <span>build</span> Your Dream Best House</h2>
                                </div>
                                <div className="slide-title-sub" data-swiper-parallax="-300">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo, habitant.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns" data-swiper-parallax="-200">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide style={{ width: "100%", height: "100%" }}>
                    <div 
                        className="slide-inner slide-bg-image" 
                        style={{ backgroundImage: `url(${hero4})`, height: "100%", width: "100%" }}
                    >
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title" data-swiper-parallax="-400">
                                    <h2>We <span>Ensure</span> Quality Industrial Solution.</h2>
                                </div>
                                <div className="slide-title-sub" data-swiper-parallax="-300">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo, habitant.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns" data-swiper-parallax="-200">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero4;
