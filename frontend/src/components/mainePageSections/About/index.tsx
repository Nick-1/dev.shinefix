import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about-area pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s"
                 data-wow-delay="0.5s">
              <Image
                src="/images/3.jpg"
                alt="about"
                width={540}
                height={327}
                priority
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="section-title">
                <div className="line"></div>
                <h3 className="title">Our mission <span>is to improve the safety of drivers and pedestrians on US roads.</span></h3>
              </div>
              <p className="text">
                In states located near the ocean, significant changes are observed in the
                headlights - they lose transparency, become yellow, and become covered with an opaque coating.
                All this leads to a reduction in headlight performance by up to 50% of their factory performance.
              </p>
              {/*<a href="#" className="main-btn">Try it Free</a>*/}
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-1">
          <Image
            src="/images/about-shape-1.svg"
            alt="about"
            width={540}
            height={327}
            priority
          />
      </div>
    </section>
  );
};

export default About;
