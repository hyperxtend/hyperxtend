import React from 'react';

const ContactLink = ({ icon, linkTo }) => (
  <a href={linkTo} target="_blank" rel="noreferrer">
    <i className={icon}></i>
  </a>
);

export default ContactLink;
