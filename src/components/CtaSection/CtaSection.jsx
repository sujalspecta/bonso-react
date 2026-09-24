import React from "react";
import { Link } from "react-router-dom";
import Shape1 from '../../images/cta-shape.svg'

const CtaSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return(
        <section className="wpo-cta-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-12 col-12">
                        <div className="wpo-cta-text">
                            <h2> We are always try to
                                <span className="cta-text-bg">serve</span>
                                the
                                <span className="cta-text-bg">best
                                    service.</span></h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-12">
                        <div className="wpo-cta-btn">
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get Started<i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <img src={Shape1} alt="" />
            </div>
        </section>
    )
}

export default CtaSection;