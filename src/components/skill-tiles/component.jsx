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
import { GITHUB_PROFILE } from '../../global';
import ContactFooter from '../contact-footer';

const SkillsSection = () => {
  return (
    <>
      <section className="section">
        <div className="wall">
          <div className="v-boxes">
            <div className="box">
              <span className="tooltip">PHP</span>
              <div className="box-face">
                <div className="box-text">
                  <FaPhp />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Git</span>
              <div className="box-face">
                <div className="box-text">
                  <FaGitAlt />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">TypeScript</span>
              <div className="box-face">
                <div className="box-text">
                  <SiTypescript />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">Python</span>
              <div className="box-face">
                <div className="box-text">
                  <FaPython />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes second">
            <div className="box">
              <span className="tooltip">React</span>
              <div className="box-face">
                <div className="box-text">
                  <FaReact />
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">HTML</span>
              <div className="box-face">
                <div className="box-text">
                  <i className="fab fa-html5"></i>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">NodeJs</span>
              <div className="box-face">
                <div className="box-text">
                  <i className="fab fa-node-js"></i>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes third">
            <div className="box">
              <span className="tooltip">JavaScript</span>
              <div className="box-face">
                <div className="box-text">
                  <i className="fab fa-js-square"></i>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <div className="box">
              <span className="tooltip">CSS</span>
              <div className="box-face">
                <div className="box-text">
                  <i className="fab fa-css3-alt"></i>
                </div>
              </div>
              <div className="box-back">
                <div className="box-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </div>
              </div>
            </div>
          </div>
          <div className="v-boxes forth">
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
              <div className="box link">
                <div className="box-face">
                  <div className="box-text">
                    <FaGithubAlt />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <ContactFooter />
    </>
  );
};

export default SkillsSection;
