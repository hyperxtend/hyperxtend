import React from 'react';
import {
  FaPhp,
  FaReact,
  FaGitAlt,
  FaPython,
  FaGithubAlt,
} from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { SiTypescript } from 'react-icons/si';
import './component.css';

const SkillsSection = () => {
  return (
    <section class="section">
      <div class="wall">
        <div class="v-boxes">
          <div class="box">
            <span class="tooltip">PHP</span>
            <div class="box-face">
              <div class="box-text">
                <FaPhp />
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div class="box">
            <span class="tooltip">Git</span>
            <div class="box-face">
              <div class="box-text">
                <FaGitAlt />
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div class="box">
            <span class="tooltip">TypeScript</span>
            <div class="box-face">
              <div class="box-text">
                <SiTypescript />
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div class="box">
            <span class="tooltip">Python</span>
            <div class="box-face">
              <div class="box-text">
                <FaPython />
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
        </div>
        <div class="v-boxes second">
          <div class="box">
            <span class="tooltip">React</span>
            <div class="box-face">
              <div class="box-text">
                <FaReact />
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div class="box">
            <span class="tooltip">HTML</span>
            <div class="box-face">
              <div class="box-text">
                <i class="fab fa-html5"></i>
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
              </div>
            </div>
          </div>
          <div class="box">
            <span class="tooltip">NodeJs</span>
            <div class="box-face">
              <div class="box-text">
                <i class="fab fa-node-js"></i>
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
                <AiOutlineStar />
              </div>
            </div>
          </div>
        </div>
        <div class="v-boxes third">
          <div class="box">
            <span class="tooltip">JavaScript</span>
            <div class="box-face">
              <div class="box-text">
                <i class="fab fa-js-square"></i>
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div class="box">
            <span class="tooltip">CSS</span>
            <div class="box-face">
              <div class="box-text">
                <i class="fab fa-css3-alt"></i>
              </div>
            </div>
            <div class="box-back">
              <div class="box-text">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <BsStarHalf />
              </div>
            </div>
          </div>
        </div>
        <div class="v-boxes forth">
          <div class="box link">
            <div class="box-face">
              <div class="box-text">
                <FaGithubAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
