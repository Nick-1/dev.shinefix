import React, { ReactNode} from "react";
import Image from 'next/image'

const Header = (): ReactNode => {
  return (
    <header className="header-area">
      <div className="navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <Image
                    src="/images/logo_step_1.png"
                    alt="Logo"
                    width={200}
                    height={55}
                    priority
                  />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">Video</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#features">Why</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">Mission</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#footer">Contacts</a>
                    </li>
                  </ul>
                </div>

                {/*<div className="navbar-btn d-none d-sm-inline-block">*/}
                {/*  <a className="main-btn" data-scroll-nav="0" href="#pricing">Free Trial</a>*/}
                {/*</div>*/}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className="header-hero bg_cover" style={ {backgroundImage: 'url(/images/banner-bg.svg)'} }>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="header-hero-content text-center">
                <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">We are FIRST in the USA</h2>
                <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">who cleans the headlights in the parking lots</h3>
                {/*<p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum dolor sit*/}
                {/*  amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>*/}
                {/*<a href="#" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get*/}
                {/*  Started</a>*/}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s"
                       data-wow-delay="1.4s">

                    <div className="responsive-video">
                      <iframe src="https://www.youtube.com/embed/ASrvWm_u-rQ?si=v2t4ZPSpWfYD_L0n"
                              title="YouTube video player" frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen>
                      </iframe>
                    </div>

                    {/*<Image*/}
                    {/*  src="/images/header-hero.png"*/}
                    {/*  alt="Hero"*/}
                    {/*  width={550}*/}
                    {/*  height={300}*/}
                    {/*  priority*/}
                    {/*/>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="particles-1" className="particles"></div>
      </div>
    </header>
  );
};

export default Header;
