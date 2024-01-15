import React from 'react';
import Image from "next/image";

const Index = () => {
  return (
    <section id="facts" className="video-counter pt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <Image
                src="/images/dots.svg"
                className="dots"
                alt="dots"
                width={390}
                height={305}
                priority
              />
                <div className="video-wrapper">
                  <div className="video-image">
                    <Image
                      src="/images/video.png"
                      alt="about"
                      width={525}
                      height={452}
                      priority
                    />
                  </div>
                  <div className="video-icon">
                    <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="video-popup"><i
                      className="lni-play"></i></a>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="counter-content">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">Cool facts <span> this about app</span></h3>
                </div>
                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              </div>
              <div className="row no-gutters">
                <div className="col-4">
                  <div className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                    <div className="counter-items text-center">
                      <span className="count"><span className="counter">125</span>K</span>
                      <p className="text">Downloads</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                    <div className="counter-items text-center">
                      <span className="count"><span className="counter">87</span>K</span>
                      <p className="text">Active Users</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                    <div className="counter-items text-center">
                      <span className="count"><span className="counter">4.8</span></span>
                      <p className="text">User Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
