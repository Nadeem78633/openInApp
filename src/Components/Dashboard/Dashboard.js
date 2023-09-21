import React from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Total from "./Total/Total";
import Activities from "./Activities/Activities";
import useMediaQuery from "@mui/material/useMediaQuery";

const Dashboard = () => {
  const isScreenSmall = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Grid container spacing={2} style={{ background: "#F8FAFF" }}>
        {isScreenSmall && <Sidebar />}

        <Grid
          item
          sm={12}
          md={8.5} // Use 12 columns for all screen sizes
          style={{
            background: "#F8FAFF",
            paddingRight: "20px",
          }}
        >
          <Header />

          <Total />
          <Activities />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
