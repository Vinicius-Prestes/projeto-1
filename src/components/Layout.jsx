import React from 'react';
import Nav from './Nav.jsx'
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout