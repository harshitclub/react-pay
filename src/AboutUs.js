import React, {useState} from 'react'
import HowToUse from './API/HowToUse.js';
import callcenter from './images/callcenter.jpg';
import hero3 from './images/hero3.jpg'

const AboutUs = () => {

    const [aboutData, setAboutData] = useState(HowToUse);

    return (
        <>
            <section className="common-section our-services" id='about'>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src={hero3} alt="about-us-image"/>
                        </div>
                        {/* right side */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">-- WE ARE ON GOOGLE AND APPLE APP STORE</h3>
                            <h1 className="main-heading">How to use the App?</h1>
                            {
                                aboutData.map((curElem)=> {
                                    const {id, title, info} = curElem;
                                  return (
                                  <> 
                                  <div className="row our-services-info" key={id}>
                                <div className="col-1 our-services-number">{id}</div>
                                <div className="col-10 our-service-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-para">{info}</p>
                                </div>
                                </div>
                                </>)
                                })
                            }
                            
                            <br/>
                            <button className="btn-style btn-style-border">More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd part of about us section */}

            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                       
                        {/* right side */}
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-item-center flex-column">
                            <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGE</h3>
                            <h1 className="main-heading">World Class Support Is<br/> Available 24/7</h1>
                            {
                                aboutData.map((curElem)=> {
                                    const {id, title, info} = curElem;
                                  return (
                                  <> 
                                  <div className="row our-services-info" key={id}>
                                <div className="col-1 our-services-number">{id}</div>
                                <div className="col-10 our-service-data">
                                    <h2>{title}</h2>
                                    <p className="main-hero-para">{info}</p>
                                </div>
                                </div>
                                </>)
                                })
                            }
                            
                            <br/>
                            <button className="btn-style btn-style-border">More</button>
                        </div>
                        <div className="col-12 col-lg-5 our-service-rightside-img">
                            <img src={callcenter} alt="about-us-image"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )}
export default AboutUs;