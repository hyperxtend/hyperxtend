import React from 'react';
import {
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  TWITTER_PROFILE,
  TUMBLR_PROFILE,
  INSTAGRAM_PROFILE,
  BEHANCE_PROFILE,
} from '../../global';
import './component.css';

const ContactLink = ({ icon, linkTo }) => (
  <a href={linkTo} target="_blank" rel="noreferrer">
    <i className={icon}></i>
  </a>
);

const ContactFooter = () => {
  return (
    <div class="flex-center">
      <ContactLink icon="fa fa-github fa-3x icon-3d" linkTo={GITHUB_PROFILE} />
      <ContactLink
        icon="fa fa-linkedin fa-3x icon-3d"
        linkTo={LINKEDIN_PROFILE}
      />
      <ContactLink
        icon="fa fa-twitter fa-3x icon-3d"
        linkTo={TWITTER_PROFILE}
      />
      <ContactLink
        icon="fa fa-behance fa-3x icon-3d"
        linkTo={BEHANCE_PROFILE}
      />
      <ContactLink icon="fa fa-tumblr fa-3x icon-3d" linkTo={TUMBLR_PROFILE} />
      <ContactLink
        icon="fa fa-instagram fa-3x icon-3d"
        linkTo={INSTAGRAM_PROFILE}
      />
    </div>
  );
};

export default ContactFooter;
