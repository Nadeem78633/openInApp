import React from "react";
import { Grid, Card, CardContent, Avatar, Typography } from "@mui/material";

const Total = () => {
  const total = [
    {
      id: 1,
      icon: "/icons/revenue.svg",
      title: "Total Revenues",
      amount: "$ 1000",
      percentage: "+2.5 %",

      background: "#7FCD93",
    },
    {
      id: 2,
      icon: "/icons/transaction.svg",
      title: "Total Transaction ",
      amount: "1000",
      percentage: "+1.7 %",
      color: "red",
      background: "#DEBF85",
    },
    {
      id: 3,
      icon: "/icons/like.svg",
      title: "Total Likes",
      amount: "1000",
      percentage: "+1.4 %",
      color: "red",
      background: "#ECA4A4",
    },
    {
      id: 4,
      icon: "/icons/totalUsers.svg",
      title: "Total Revenues",
      amount: "1000",
      percentage: "+4.2 %",
      color: "red",
      background: "#A9B0E5",
    },
  ];
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {total.map((data) => (
          <Grid item xs={6} md={3} key={data.id}>
            <Card
              style={{
                width: "100%",
                height: "100%",
                background: "#FFFFFF",
                border: "2px solid #E0E0E0",
                borderRadius: "20px",
                filter: "drop-shadow(3px 4px 11px rgba(98, 98, 98, 0.15))",
              }}
            >
              <CardContent>
                <Avatar
                  sx={{ width: "31.83", height: "31.83" }}
                  style={{
                    color: data.color,
                    background: data.background,
                  }}
                >
                  <img src={data.icon} />
                </Avatar>
                <Typography
                  style={{
                    width: "100%",
                    height: "13px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "11px",
                    lineHeight: "13px",
                    color: "#000000",
                    marginTop: "10px",
                  }}
                >
                  {data.title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    direction: "row",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    style={{
                      height: "29px",

                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "21px",
                      lineHeight: "29px",
                    }}
                  >
                    {data.amount}
                  </Typography>
                  <Avatar
                    style={{
                      width: "47px",
                      height: "24px",

                      background: "#E9F9EB",
                      borderRadius: "34px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "10px",
                      color: " #3CC952",
                      marginLeft:'auto'
                    }}
                  >
                    {data.percentage}
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Total;
