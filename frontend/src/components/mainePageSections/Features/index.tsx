import React from 'react';
import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="services-area pt-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center pb-40">
              <div className="line m-auto"></div>
              <h3 className="title">What are we doing</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-7 col-sm-8">
            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="services-icon">
                <Image
                  src="/images/services-shape.svg"
                  className="shape"
                  alt="shape"
                  width={95}
                  height={95}
                  priority
                />
                <Image
                  src="/images/services-shape-1.png"
                  className="shape-1"
                  alt="shape"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title">Time</h4>
                <p className="text">We save your time visiting the service station</p>
                {/*<a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>*/}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-7 col-sm-8">
            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="services-icon">
                <Image
                  src="/images/services-shape.svg"
                  className="shape"
                  alt="shape"
                  width={95}
                  height={95}
                  priority
                />
                <Image
                  src="/images/services-shape-2.png"
                  className="shape-1"
                  alt="shape"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title">Clean</h4>
                <p className="text">Remove yellow plaque from your headlights</p>
                {/*<a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>*/}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-7 col-sm-8">
            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="services-icon">
                <Image
                  src="/images/services-shape.svg"
                  className="shape"
                  alt="shape"
                  width={95}
                  height={95}
                  priority
                />
                <Image
                  src="/images/services-shape-3.png"
                  className="shape-1"
                  alt="shape"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title"><a href="#">Transparency</a></h4>
                <p className="text">Restore transparency to your headlights</p>
                {/*<a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>*/}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-7 col-sm-8">
            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="services-icon">
                <Image
                  src="/images/services-shape.svg"
                  className="shape"
                  alt="shape"
                  width={95}
                  height={95}
                  priority
                />
                <Image
                  src="/images/services-shape-4.png"
                  className="shape-1"
                  alt="shape"
                  width={60}
                  height={60}
                  priority
                />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title"><a href="#">Light</a></h4>
                <p className="text">Increasing the light transmission of headlights</p>
                {/*<a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
