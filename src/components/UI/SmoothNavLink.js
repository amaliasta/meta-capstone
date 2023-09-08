import React from 'react';
import { NavLink } from 'react-router-dom';

const SmoothScrollNavLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const sectionId = to.substring(1); // Remove the leading slash
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavLink to={to} onClick={handleClick}>
      {children}
    </NavLink>
  );
};

export default SmoothScrollNavLink;
