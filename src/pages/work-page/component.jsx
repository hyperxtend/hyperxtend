import React from 'react';
import FadeInSection from '../../components/fade-in-section';
import './component.css';

const WorkPage = () => {
  const items = Array.from({ length: 1000 }, (_, i) => i + 1).map((number) => (
    <FadeInSection key={number}>Section {number}</FadeInSection>
  ));

  return <main>{items}</main>;
};

export default WorkPage;
