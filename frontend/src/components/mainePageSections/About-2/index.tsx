import React from 'react';
import Image from "next/image";

const About_2 = () => {
  return (
    <section id="about" className="about-area pt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s"
                 data-wow-delay="0.5s">
              <Image
                src="/images/2.jpg"
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
                <h3 className="title">Our idea <span> is that while you are shopping in the store, we clean your headlights.</span></h3>
              </div>
              <p className="text">
                We have developed an inexpensive, simple, fast and innovative headlight restoration technology.
                The procedure for 2 headlights takes 20-30 minutes. When you return to your car,
                the headlights will look like new!
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

export default About_2;
