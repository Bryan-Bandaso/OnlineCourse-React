import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        ⭐⭐⭐⭐⭐
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight: "bold" }} component="div">
        Bryan Ade Bandaso
      </Typography>
      <Typography sx={{ mb: 1.5 , fontSize: 12}} color="text.secondary">
        App Store
      </Typography>
      <Typography sx={{ fontSize: 14 }} variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, sed?
      </Typography>
    </CardContent>
  </React.Fragment>
);

const TestimonialPage = () => {
  return (
    <div className="TestimonialPage">
      <div className="TestiTitle">
        <h3>REVIEWS</h3>
        <h2>What our user says about us</h2>
      </div>
      <div className="TestiCards">
        <div className="TestiCardList">
          <div className="TestiCard">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
          <div className="TestiCard">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
          <div className="TestiCard">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
        </div>
        <div className="TestiCardList">
          <div className="TestiCard">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
          <div className="TestiCard">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
          <div className="TestiCard">
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
