import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about-area pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="section-title">
                <div className="line"></div>
                <h3 className="title">Quick & Easy <span>to Use Bootstrap Template</span></h3>
              </div>
              <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
              <a href="#" className="main-btn">Try it Free</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s"
                 data-wow-delay="0.5s">
              <Image
                src="/images/about1.svg"
                alt="about"
                width={540}
                height={327}
                priority
              />
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
