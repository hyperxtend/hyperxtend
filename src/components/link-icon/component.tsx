import React from 'react';
import { ILinkIconProps } from '../../models';
import { StyledLink } from './styles';

const LinkIcon: React.FC<ILinkIconProps> = ({ href, id, iconClass }) => {
  return (
    <StyledLink href={href} id={id} target="_blank" rel="noreferrer">
      <i className={iconClass} aria-hidden="true"></i>
    </StyledLink>
  );
};

export default LinkIcon;
