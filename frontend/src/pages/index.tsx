import React, { useEffect, useState } from 'react';

import '../styles/css/animate.css';
import '../styles/css/magnific-popup.css';
import '../styles/css/slick.css';
import '../styles/css/LineIcons.css';
import '../styles/css/font-awesome.min.css';
import '../styles/css/bootstrap.min.css';
import '../styles/css/default.css';
import '../styles/css/style.css';

import Header from "@/components/mainePageSections/Header";
import ScriptSrc from "@/components/mainePageSections/ScriptSrc";
import Partners from "@/components/mainePageSections/Partners";
import Features from "@/components/mainePageSections/Features";
import About from "@/components/mainePageSections/About";
import Facts from "@/components/mainePageSections/Facts";
import Team from "@/components/mainePageSections/Team";
import UserComments from "@/components/mainePageSections/UserComments";
import Blog from "@/components/mainePageSections/Blog";
import Footer from "@/components/mainePageSections/Footer";
import BackTopButton from "@/components/mainePageSections/BackTopButton";

const Home = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/hello`)
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      <ScriptSrc />
      <Header />
      <Partners />
      <Features />
      <About />
      <Facts />
      <Team />
      <UserComments />
      <Blog />
      <Footer />
      <BackTopButton />
    </>
  );
};

export default Home;
