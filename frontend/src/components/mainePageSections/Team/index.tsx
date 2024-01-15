import React from 'react';
import Image from "next/image";

const Team = () => {
  return (
    <section id="team" className="team-area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center pb-30">
              <div className="line m-auto"></div>
              <h3 className="title"><span>Meet Our</span> Creative Team Members</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="team-image">
                <Image
                  src="/images/team-1.png"
                  alt="photo"
                  width={350}
                  height={293}
                  priority
                />
                  <div className="social">
                    <ul>
                      <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                      <li><a href="#"><i className="lni-instagram-filled"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content">
                <h5 className="holder-name"><a href="#">Isabela Moreira</a></h5>
                <p className="text">Founder and CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="team-image">
                <Image
                  src="/images/team-2.png"
                  alt="photo"
                  width={350}
                  height={293}
                  priority
                />
                  <div className="social">
                    <ul>
                      <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                      <li><a href="#"><i className="lni-instagram-filled"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content">
                <h5 className="holder-name"><a href="#">Elon Musk</a></h5>
                <p className="text">Sr. Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8">
            <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="team-image">
                <Image
                  src="/images/team-3.png"
                  alt="photo"
                  width={350}
                  height={293}
                  priority
                />
                  <div className="social">
                    <ul>
                      <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                      <li><a href="#"><i className="lni-instagram-filled"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                    </ul>
                  </div>
              </div>
              <div className="team-content">
                <h5 className="holder-name"><a href="#">Fiona Smith</a></h5>
                <p className="text">Business Development Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
