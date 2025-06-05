import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
         Copyright &copy; {new Date().getFullYear()} Nawaraj Neupane. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer
