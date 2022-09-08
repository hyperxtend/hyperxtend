import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DotifyProjectImage from '../../assets/project-dotify.PNG';
import WhetherProjectImage from '../../assets/project-whether.PNG';
import ProjectModal from '../project-modal';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './component.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  height: 100%;
  margin-top: 10%;
  border: 3px solid red;
  padding: 2rem;
  display: flex;
`;

const ProjectCarousel = () => {
  return (
    <CarouselContainer>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={50}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectModal
            projectName="dotify"
            projectDescription="spotify but better"
            projectImage={DotifyProjectImage}
            projectURL="https://dotify-hyperxtend.herokuapp.com/"
            title="dotify"
            body="A fullstack web application built using React, Express & Node JS with Spotify's Web API"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="Whether the Weather"
            projectDescription="another weather app"
            projectImage={WhetherProjectImage}
            projectURL="https://hyperxtend.github.io/wheather-app/"
            title="Whether the Weather"
            body="A fullstack web application built using React, Express & Node JS with Spotify's Web API"
          />
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
};

export default ProjectCarousel;
