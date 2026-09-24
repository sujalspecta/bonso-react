import React from 'react'
import { Link } from 'react-router-dom'
import About from "../../images/about/about-s2.jpg"

const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={About} alt="" />
                                <div className="images-text">
                                    <h3>25 Years Of Experience</h3>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="wpo-section-title">
                                <span>ABOUT OUR COMPANY!!</span>
                                <h2>We Are Expert
                                    For Powerful
                                    Service.</h2>
                            </div>
                            <div className="wpo-about-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting’s the industrey's
                                    standard dummy text ever since the 1500 when printed galley of type and scrambled
                                    type specimen book.
                                </p>
                                <ul>
                                    <li>Help to improve the client predection</li>
                                    <li>Covered the whole of her lowe</li>
                                    <li>Turned to look out the window</li>
                                </ul>
                                <Link onClick={ClickHandler} className="theme-btn color-9" to="/about">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;