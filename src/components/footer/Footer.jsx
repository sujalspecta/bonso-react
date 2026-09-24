import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Services from '../../api/Services'
import footerBg from '../../images/footer-bg.jpg'
import Shape1 from '../../images/sappot-shape.svg'
import News1 from '../../images/news/img-01.jpg'
import News2 from '../../images/news/img-01.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {

    const [phoneNumber, setPhoneNumber] = useState('+88659789874');

    return (
        <footer className="wpo-site-footer">
            <div className="footer-bg">
                <img src={footerBg} alt="footer-bg" />
            </div>
            <div className="wpo-support-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <div className="wpo-support-title">
                                <h2>Ready to
                                    indutrial support.</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="wpo-support-icon">
                                <a href={`tel:${phoneNumber}`} className="support">
                                    <div className="shape">
                                        <i className="fi flaticon-phone-call-1"></i>
                                    </div>
                                </a>
                                <div className="shape-1">
                                    <img src={Shape1} alt="Shape1" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="wpo-support-munber">
                                <span>Call Us Today:</span>
                                <p>+88 659 789 874</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>All Services:</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 6).map((service, sitem) => (
                                        <li key={sitem}>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                <i className="ti-angle-right"></i>{service.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className="widget contact-widget">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                                <div className="widget-title">
                                    <h3>Contact Us:</h3>
                                </div>
                                <ul>
                                    <li>Call: +88 659 789 874</li>
                                    <li>E-mail: bunso@gmail.com</li>
                                    <li>Website: www.bunso.com</li>
                                </ul>
                                <h4>Subscribe to Nesletter:</h4>
                                <form>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Enter your email" required="" />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fa flaticon-send" aria-hidden="true"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget blog-widget">
                                <div className="widget-title">
                                    <h3>Blog Post:</h3>
                                </div>
                                <ul>
                                    <li>
                                        <div className="image">
                                            <img src={News1} alt="" />
                                        </div>
                                        <div className="text">
                                            <p><Link to="/blog-single/1">Standard and text since the make specimen.</Link></p>
                                            <span>12 August, 2026</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img src={News2} alt="" />
                                        </div>
                                        <div className="text">
                                            <p><Link to="/blog-single/2">Standard and text since the make specimen.</Link></p>
                                            <span>12 August, 2026</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-12">
                            <p className="copyright"> Copyright &copy; 2026 bunso by <Link onClick={ClickHandler} to="/">wpOceans</Link>. All
                                Rights Reserved.</p>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="social-widget">
                                <ul>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={ClickHandler}>
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;

