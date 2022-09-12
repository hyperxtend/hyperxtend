import React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  @media only screen and (max-width: 766px) {
    margin-top: 15rem;
  }
`;

const HeaderTitle = styled.h3`
  font-family: 'Expletus Sans', cursive;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 4em;
  color: black;
  text-align: center;
  font-weight: 700;
`;

const HeaderDescription = styled.p`
  letter-spacing: 2px;
  text-align: center;
  font-weight: 500;
`;

const PageHeader = ({ title, description }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{description}</HeaderDescription>
    </HeaderContainer>
  );
};

export default PageHeader;
