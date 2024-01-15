import React from 'react';
import Script from "next/script";

const ScriptSrc = () => {
  return (
    <>
      <Script src="/assets/mainPageJS/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/vendor/modernizr-3.7.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/popper.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/slick.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/ajax-contact.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/waypoints.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/jquery.counterup.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/jquery.easing.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/scrolling-nav.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/wow.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/particles.min.js" strategy="beforeInteractive" />
      <Script src="/assets/mainPageJS/main.js" strategy="afterInteractive" />
    </>
  );
};

export default ScriptSrc;
