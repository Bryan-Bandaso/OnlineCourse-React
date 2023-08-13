import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StartIcon from "@mui/icons-material/Start";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// Asset Image
import HomeImage from "../assets/img/hero.png";
import UnairLogo from "../assets/img/unair.png";
import WhyImage from "../assets/img/why.jpg";
import MentorImage from "../assets/img/mentor.jpg";
import BarIcon from "../assets/img/graph-bar.png";

Card.propDefault = {
  title: "Default",
};

const HomePage = () => {
  return (
    <div className="Home">
      <div className="homepage">
        <header>
          <div className="HeaderText">
            <h1>
              Come Join <br />
              With Us 💯
            </h1>
            <p>
              We help you find the perfect tutor. It's <br />
              completely free
            </p>
            <div className="ButtonHomePage">
              <Button
                className="ButtonStart"
                variant="contained"
                endIcon={<StartIcon />}
              >
                Get Started
              </Button>
              <Button className="ButtonMore" variant="outlined">
                Learn More
              </Button>
            </div>
            <div className="HeaderText-1">
              <div className="row">
                <p>12k +</p>
                <span>Tutors</span>
              </div>
              <div className="row">
                <p>108k +</p>
                <span>Students</span>
              </div>
              <div className="row">
                <p>210+ </p>
                <span>Subjects</span>
              </div>
            </div>
          </div>
          <img src={HomeImage} alt="Homepage" />
        </header>
      </div>
      <div className="HomePageSection1">
        <h3>
          We Collaborate With 200+ Leading <br />
          Universities And Companies
        </h3>
        <div className="ImgSection1">
          <img src={UnairLogo} alt="" />
          <img src={UnairLogo} alt="" />
          <img src={UnairLogo} alt="" />
          <img src={UnairLogo} alt="" />
          <img src={UnairLogo} alt="" />
          <img src={UnairLogo} alt="" />
        </div>
      </div>
      <div className="HomePageSection2">
        <div className="PageSection2">
          <div id="ImgSection2">
            <img src={WhyImage} alt="" />
          </div>
          <div id="text">
            <h3>
              Why Online Learning Course <br />
              Method ? 🤷‍♂️
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="PageSection2">
          <div className="PageSection2-Card">
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
              </div>
              <div className="card-content">
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
              </div>
              <div className="card-content">
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
              </div>
              <div className="card-content">
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="logo">
                <img src={BarIcon} alt="" />
              </div>
              <div className="card-content">
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HomePageSection3">
        <h3>
          Our Experience & <br />
          Professional Mentor In <br />
          Jupiter
        </h3>
        <div className="cardEmployees">
          <div className="cardEmployee">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={MentorImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jonanthan Liandi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<InstagramIcon />}>
                  Instagram
                </Button>
                <Button size="small" endIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
                <Button size="small" endIcon={<EmailIcon />}>
                  Gmail
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="cardEmployee">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={MentorImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jonanthan Liandi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<InstagramIcon />}>
                  Instagram
                </Button>
                <Button size="small" endIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
                <Button size="small" endIcon={<EmailIcon />}>
                  Gmail
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="cardEmployee">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={MentorImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jonanthan Liandi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<InstagramIcon />}>
                  Instagram
                </Button>
                <Button size="small" endIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
                <Button size="small" endIcon={<EmailIcon />}>
                  Gmail
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="cardEmployees">
          <div className="cardEmployee">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={MentorImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jonanthan Liandi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<InstagramIcon />}>
                  Instagram
                </Button>
                <Button size="small" endIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
                <Button size="small" endIcon={<EmailIcon />}>
                  Gmail
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="cardEmployee">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={MentorImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jonanthan Liandi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<InstagramIcon />}>
                  Instagram
                </Button>
                <Button size="small" endIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
                <Button size="small" endIcon={<EmailIcon />}>
                  Gmail
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="cardEmployee">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={MentorImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jonanthan Liandi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Manager
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" endIcon={<InstagramIcon />}>
                  Instagram
                </Button>
                <Button size="small" endIcon={<LinkedInIcon />}>
                  LinkedIn
                </Button>
                <Button size="small" endIcon={<EmailIcon />}>
                  Gmail
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
