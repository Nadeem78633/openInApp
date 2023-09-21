import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "Transactions",
      icon: "/icons/transaction.svg",
      link: "/transaction",
    },
    {
      title: "Schedules",
      icon: "/icons/schedule.svg",
      link: "/schedule",
    },
    {
      title: "Users",
      icon: "/icons/user.svg",
      link: "/user",
    },
    {
      title: "Settings",
      icon: "/icons/setting.svg",
      link: "/setting",
    },
  ];
  return (
    <Grid
      item
      sm={0}
      xs={0}
      md={3.5}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "280px",
          height: "980px",
          background: "linear-gradient(180deg, #4285F4 0%, #3C83F9 100%)",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "44px",
              color: "white",
              position: "relative",
              left: "17.86%",
              marginTop: "40px",
            }}
          >
            Board
          </Typography>
          <NavLink
            style={{
              position: "relative",
              left: "17.86%",
              marginTop: "40px",
              display: "flex",
              fontFamily: "Montserrat",
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            <img
              src="/icons/dashboard.svg"
              alt="icon"
              style={{
                width: "17.04px",
                height: "18px",
                marginRight: "10px",
              }}
            />
            Dashboard
          </NavLink>
          {data?.map((d) => (
            <NavLink
              style={{
                position: "relative",
                left: "17.86%",
                marginTop: "40px",
                display: "flex",
                fontFamily: "Montserrat",
                color: "white",
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "22px",
              }}
            >
              <img
                src={d.icon}
                alt="icon"
                style={{
                  width: "17.04px",
                  height: "18px",
                  marginRight: "10px",
                }}
              />

              {d.title}
            </NavLink>
          ))}
          <Typography
            style={{
              position: "relative",
              left: "17.86%",
              right: "70%",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "17px",
              color: "white",
              marginTop: "450px",
              marginBottom: "20px",
            }}
          >
            Help
          </Typography>
          <Typography
            style={{
              position: "relative",
              left: "17.86%",
              right: "70%",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "17px",
              color: "white",
            }}
          >
            Contact Us
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Sidebar;
