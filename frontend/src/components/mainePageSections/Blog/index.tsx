import React from 'react';
import Image from "next/image";

const Blog = () => {
  return (
    <section id="blog" className="blog-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-35">
              <div className="line"></div>
              <h3 className="title"><span>Our Recent</span> Blog Posts</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7">
            <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="blog-image">
                <Image
                  src="/images/blog-1.jpg"
                  className="blog"
                  alt="blog"
                  width={350}
                  height={245}
                  priority
                />
              </div>
              <div className="blog-content">
                <ul className="meta">
                  <li>Posted By: <a href="#">Admin</a></li>
                  <li>03 June, 2023</li>
                </ul>
                <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt
                  labore.</p>
                <a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <div className="blog-image">
                <Image
                  src="/images/blog-2.jpg"
                  className="blog"
                  alt="blog"
                  width={350}
                  height={245}
                  priority
                />
              </div>
              <div className="blog-content">
                <ul className="meta">
                  <li>Posted By: <a href="#">Admin</a></li>
                  <li>03 June, 2023</li>
                </ul>
                <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt
                  labore.</p>
                <a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
              <div className="blog-image">
                <Image
                  src="/images/blog-3.jpg"
                  className="blog"
                  alt="blog"
                  width={350}
                  height={245}
                  priority
                />
              </div>
              <div className="blog-content">
                <ul className="meta">
                  <li>Posted By: <a href="#">Admin</a></li>
                  <li>03 June, 2023</li>
                </ul>
                <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt
                  labore.</p>
                <a className="more" href="#">Learn More <i className="lni-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
