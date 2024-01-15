import React from 'react';
import Script from "next/script";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="brand-area pt-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
              <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <Image
                  src="/images/brand-1.png"
                  alt="brand"
                  width={162}
                  height={36}
                  priority
                />
              </div>
              <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <Image
                  src="/images/brand-2.png"
                  alt="Logo"
                  width={162}
                  height={36}
                  priority
                />
              </div>
              <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <Image
                  src="/images/brand-3.png"
                  alt="brand"
                  width={162}
                  height={36}
                  priority
                />
              </div>
              <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                <Image
                  src="/images/brand-4.png"
                  alt="brand"
                  width={162}
                  height={36}
                  priority
                />
              </div>
              <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                <Image
                  src="/images/brand-5.png"
                  alt="brand"
                  width={162}
                  height={36}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
