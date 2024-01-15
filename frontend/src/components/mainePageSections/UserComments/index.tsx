import React from 'react';
import Image from "next/image";

const UserComments = () => {
  return (
    <section id="testimonial" className="testimonial-area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-title text-center pb-40">
              <div className="line m-auto"></div>
              <h3 className="title">Users sharing<span> their experience</span></h3>
            </div>
          </div>
        </div>
        <div className="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
          <div className="col-lg-4">
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor
                  invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    src="/images/textimonial-shape.svg"
                    className="shape"
                    alt="shape"
                    width={120}
                    height={120}
                    priority
                  />
                  <Image
                    src="/images/author-1.png"
                    className="author"
                    alt="author"
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">Jenny Deo</h6>
                  <p className="text">CEO, SpaceX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor
                  invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    src="/images/textimonial-shape.svg"
                    className="shape"
                    alt="shape"
                    width={120}
                    height={120}
                    priority
                  />
                  <Image
                    src="/images/author-2.png"
                    className="author"
                    alt="author"
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">Marjin Otte</h6>
                  <p className="text">UX Specialist, Yoast</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor
                  invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    src="/images/textimonial-shape.svg"
                    className="shape"
                    alt="shape"
                    width={120}
                    height={120}
                    priority
                  />
                  <Image
                    src="/images/author-3.png"
                    className="author"
                    alt="author"
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">David Smith</h6>
                  <p className="text">CTO, Alphabet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <i className="lni-quotation"></i>
                </div>
                <div className="star">
                  <ul>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                    <li><i className="lni-star-filled"></i></li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor
                  invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
              </div>
              <div className="testimonial-author d-flex align-items-center">
                <div className="author-image">
                  <Image
                    src="/images/textimonial-shape.svg"
                    className="shape"
                    alt="shape"
                    width={120}
                    height={120}
                    priority
                  />
                  <Image
                    src="/images/author-2.png"
                    className="author"
                    alt="author"
                    width={80}
                    height={80}
                    priority
                  />
                </div>
                <div className="author-content media-body">
                  <h6 className="holder-name">Fajar Siddiq</h6>
                  <p className="text">COO, MakerFlix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserComments;
