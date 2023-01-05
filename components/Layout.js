import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title> Easybank landing page | Frontend Mentor</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
