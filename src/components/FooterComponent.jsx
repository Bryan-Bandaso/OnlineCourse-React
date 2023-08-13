import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterComponent = () => {
  return (
    <div className="Footer">
      <div className="FooterContents">
        <div className="FooterContent">
          <div className="FooterContent1">
            <h2>JUPITERLearn</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Aliquid voluptatum libero veniam explicabo necessitatibus <br />
              doloribus quibusdam eius quas nam accusamus.
            </p>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="FooterContent">
          <div className="FooterContent2">
            <h3>Jupiterlearn Business</h3>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
          </div>
        </div>
        <div className="FooterContent">
          <div className="FooterContent2">
            <h3>Service</h3>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
          </div>
        </div>
        <div className="FooterContent">
          <div className="FooterContent2">
            <h3>Contact Us</h3>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
            <p>
              <a href="http://">Lorem</a>
            </p>
          </div>
        </div>
      </div>
      <div className="FooterCopy">
        <p>copyright @2023 Jupiterlearn logo facebook linkend Ig</p>
        <div className="FooterCopyIcon">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
