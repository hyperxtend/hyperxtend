import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DotifyProjectImage from '../../assets/project-dotify.PNG';
import WhetherProjectImage from '../../assets/project-whether.PNG';
import LumaProjectImage from '../../assets/project-luma.PNG';
import GuitarProjectImage from '../../assets/project-guitar.PNG';
import SnakeProjectImage from '../../assets/project-snake.PNG';
import MazeProjectImage from '../../assets/project-maze.PNG';
import TwoZeroFourEightProjectImage from '../../assets/project-2048.PNG';
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
        loopedSlides={7}
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
            body="A responsive React web application using OpenWeather API"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="Luma Fitness Store"
            projectDescription="e-commerce store with a cart"
            projectImage={LumaProjectImage}
            projectURL="https://luma-e-com.herokuapp.com/"
            title="Luma Fitness"
            body="An e-commerce website with functional catalogue & cart made using JavaScript"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="Guitar Simulator"
            projectDescription="simple guitar simulator"
            projectImage={GuitarProjectImage}
            projectURL="https://hyperxtend.github.io/guitarSimulator/"
            title="Guitar Simulator"
            body="At first I was playing around with making a Guitar Tuner, however I saw a instrument simulator online & thought that I could convert it into something similar to that. The project was made with HTML, CSS, Bootstrap & JavaScript."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="Snake"
            projectDescription="good ole game of snake"
            projectImage={SnakeProjectImage}
            projectURL="https://hyperxtend.github.io/snakeGame/"
            title="Snake"
            body="A responsive endless arcade classic game of Snake, where as the snake gets longer it gets faster as well. Created using HTML, CSS & JavaScript"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="Space Maze"
            projectDescription="help find the way"
            projectImage={MazeProjectImage}
            projectURL="https://hyperxtend.github.io/guitarSimulator/"
            title="Space Maze"
            body=" A problem solving game with stats and multiple difficulties to help challenge you. Created using HTML, CSS & JavaScript"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectModal
            projectName="2048"
            projectDescription="you know this game"
            projectImage={TwoZeroFourEightProjectImage}
            projectURL="https://hyperxtend.github.io/2048/"
            title="2048"
            body="This responsive web game was made using React JS - its currently an WIP in order to support mobile game play"
          />
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
};

export default ProjectCarousel;
