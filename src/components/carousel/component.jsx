import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DotifyProjectImage from '../../assets/project-dotify.PNG';
import WhetherProjectImage from '../../assets/project-whether.PNG';
import LumaProjectImage from '../../assets/project-luma.PNG';
import GuitarProjectImage from '../../assets/project-guitar.PNG';
import ProjectModal from '../project-modal';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

import './component.css';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  height: 100%;
  padding: 2rem;
  display: flex;
`;

const ProjectCarousel = () => {
  return (
    <CarouselContainer>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loopedSlides={4}
        spaceBetween={55}
        slidesPerView={'auto'}
        rewind={true}
        loop={true}
        watchOverflow={false}
        pagination={true}
        navigation={true}
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
        <SwiperSlide>
          <ProjectModal
            projectName="Luma Fitness Store"
            projectDescription="e-commerce store with a cart"
            projectImage={LumaProjectImage}
            projectURL="https://luma-e-com.herokuapp.com/"
            title="Luma Fitness"
            body="A fullstack web application built using React, Express & Node JS with Spotify's Web API"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="Guitar Simulator"
            projectDescription="simple guitar simulator"
            projectImage={GuitarProjectImage}
            projectURL="https://luma-e-com.herokuapp.com/"
            title="Guitar Simulator"
            body="A fullstack web application built using React, Express & Node JS with Spotify's Web API"
          />
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
};

export default ProjectCarousel;
