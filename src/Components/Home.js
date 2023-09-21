import React from "react";
import {
 
  Grid,
  Typography,
} from "@mui/material";
import './home.css'

// Home
import Login from "./LoginAndSignUp/Login";


const Home = () => {
 
  return (
    <Grid container spacing={4} style={{ height: "1024px" }}>
      <Grid
        item
        xs={12}
        md={6}
        className="gradient-container" // Use a class for styling
      >
        <div className="white-triangle"></div>

        <Typography
          style={{
            position: "absolute",
            width: "69px",
            height: "29px",
            left: "72.99px",
            top: "59.81px",

            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "122.69%",

            letterSpacing: "0.015em",

            color: "#FFFFFF",
          }}
        >
          LOGO
        </Typography>
        <Typography
          style={{
            position: "absolute",
            width: "246px",
            height: "88px",
            left: "50%" /* Horizontally center the element */,
            top: "412px" /* Keep the vertical position as is */,
            transform: "translateX(-50%)" /* Center using translateX */,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "72px",
            lineHeight: "88px",
            /* identical to box height */
            color: "#FFFFFF",
          }}
        >
          Board
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center" /* Center items horizontally */,
            alignItems: "center",
            padding: "0px",
            gap: "48px",
            position: "absolute",
            width: "299px",
            height: "48px",
            left: "25%",
            top: "909px",
          }}
        >
          <img
            src="/icons/github.svg"
            style={{ height: "44px", width: "44px" }}
          />
          <img
            src="/icons/twitter.svg"
            style={{ height: "42px", width: "41px" }}
          />
          <img
            src="/icons/linkedin.svg"
            style={{ height: "48px", width: "48px" }}
          />
          <img
            src="/icons/discord.svg"
            style={{ height: "50px", width: "48px" }}
          />
        </div>
      </Grid>
      <Login/>
    </Grid>
  );
};

export default Home;
