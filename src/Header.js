import React from 'react'
import hero1 from './images/hero1.jpg'
import hero4 from './images/hero4.jpg'

const Header = () => {
    return (
        <>
           <header>
               <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-item-start">
                            <h1 className="display-2">Online Payment Made<br/> Easy For You.</h1>
                            <p className="main-hero-para">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            </p>
                            <h3>Get Early Access For You</h3>
                            <div className="input-group mt-3">
                                <input type="text" placeholder="Enter Your Email" className="rounded-pill p-3 w-75 me-3 form-control-text"/>
                                <div className="input-group-button">Get Now</div>
                            </div>
                        </div>
                        {/* main header right */}
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                            <img src={hero1} alt="mainHeroImage" className="img-fluid"/>
                            <img src={hero4} alt="mainHeroImage" className="img-fluid main-hero-img2"/>
                        </div>
                    </div>
               </section>
           </header>
        </>
    )
}

export default Header
