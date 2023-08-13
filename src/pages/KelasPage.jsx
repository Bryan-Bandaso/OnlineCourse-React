import React from "react";

import { TextField, Button } from "@mui/material";
import StudentImage from "../assets/img/friends-student.jpg";
import BarIcon from "../assets/img/graph-bar.png";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";

import MentorImage from "../assets/img/mentor.jpg";

const KelasPage = () => {
  return (
    <div className="KelasPage">
      <div className="KelasSection">
        <img src={StudentImage} alt="" />
        <div className="KelasSection1">
          <h3>ENHANCE YOUR CAREER</h3>
          <h2>Boost your skillset with our online Learning app</h2>
          <p className="KelasSection1-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            numquam molestiae! Libero beatae fuga nam.
          </p>
          <div className="KelasSection1-ClassList">
            <div className="KelasSection1-list">
              <p>Graphics Design</p>
              <p>IT Software</p>
              <p>UI/UX Design</p>
              <p>Development</p>
            </div>
            <div className="KelasSection1-list">
              <p>Data Science</p>
              <p>Photography</p>
              <p>Personal Development</p>
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="KelasSection2">
        <h3>OUR BEST COURSE</h3>
        <h1>Discover a most popular Online Course</h1>
        <div className="KelasSection2-Search">
          <TextField
            id="outlined-basic"
            label="search course.."
            variant="outlined"
          />
          <Button variant="contained">See more</Button>
        </div>
        <div className="KelasAllCard">
          <div className="CardSection1">
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
                <p>Best Seller</p>
              </div>
              <div className="card-content">
                <span>Front End Developer</span>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div className="desc" id="DescPrice">
                  <div className="card-mentor">
                    <img src={MentorImage} alt="" />
                    <p className="card-mentor-name">Simon Dowel</p>
                  </div>
                  <div>
                    <span>12 Session</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="DescPrice">
                    <p>$18.00</p>
                  </div>
                  <div>
                    <p>⭐ 5.0(50.13)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
                <p>Best Seller</p>
              </div>
              <div className="card-content">
                <span>Front End Developer</span>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div className="desc" id="DescPrice">
                  <div className="card-mentor">
                    <img src={MentorImage} alt="" />
                    <p className="card-mentor-name">Simon Dowel</p>
                  </div>
                  <div>
                    <span>12 Session</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="DescPrice">
                    <p>$18.00</p>
                  </div>
                  <div>
                    <p>⭐ 5.0(50.13)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
                <p>Best Seller</p>
              </div>
              <div className="card-content">
                <span>Front End Developer</span>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div className="desc" id="DescPrice">
                  <div className="card-mentor">
                    <img src={MentorImage} alt="" />
                    <p className="card-mentor-name">Simon Dowel</p>
                  </div>
                  <div>
                    <span>12 Session</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="DescPrice">
                    <p>$18.00</p>
                  </div>
                  <div>
                    <p>⭐ 5.0(50.13)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CardSection2">
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
                <p>Best Seller</p>
              </div>
              <div className="card-content">
                <span>Front End Developer</span>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div className="desc" id="DescPrice">
                  <div className="card-mentor">
                    <img src={MentorImage} alt="" />
                    <p className="card-mentor-name">Simon Dowel</p>
                  </div>
                  <div>
                    <span>12 Session</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="DescPrice">
                    <p>$18.00</p>
                  </div>
                  <div>
                    <p>⭐ 5.0(50.13)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
                <p>Best Seller</p>
              </div>
              <div className="card-content">
                <span>Front End Developer</span>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div className="desc" id="DescPrice">
                  <div className="card-mentor">
                    <img src={MentorImage} alt="" />
                    <p className="card-mentor-name">Simon Dowel</p>
                  </div>
                  <div>
                    <span>12 Session</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="DescPrice">
                    <p>$18.00</p>
                  </div>
                  <div>
                    <p>⭐ 5.0(50.13)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
                <p>Best Seller</p>
              </div>
              <div className="card-content">
                <span>Front End Developer</span>
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <div className="desc" id="DescPrice">
                  <div className="card-mentor">
                    <img src={MentorImage} alt="" />
                    <p className="card-mentor-name">Simon Dowel</p>
                  </div>
                  <div>
                    <span>12 Session</span>
                  </div>
                </div>
                <div className="desc">
                  <div className="DescPrice">
                    <p>$18.00</p>
                  </div>
                  <div>
                    <p>⭐ 5.0(50.13)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="KelasSection3">
        <div id="KelasSection3">
          <h3>HOW IT WORK</h3>
          <h1>
            An easy way to start <br />
            learning and get new <br />
            skills here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Porro laboriosam corporis molestiae beatae autem illo <br />
            culpa facere nihil minima consequatur.
          </p>
          <Button>Get started</Button>
        </div>
        <div id="KelasSection3" className="ClassFlow">
          <div className="KelasFlow" id="KelasFlow">
            <div className="KelasFlow-1">
              <LooksOneIcon />
              <p>Explore the course catalog</p>
            </div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Praesentium fuga quae culpa deserunt non maxime <br />
              id at maiores consequatur ipsa!
            </span>
          </div>
          <div className="KelasFlow">
            <LooksTwoIcon />
            <p>Read course descriptions and reviews</p>
          </div>
          <div className="KelasFlow">
            <Looks3Icon />
            <p>Check the course availbalitity and pricing</p>
          </div>
          <div className="KelasFlow">
            <Looks4Icon />
            <p>Enroll in the course</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default KelasPage;
