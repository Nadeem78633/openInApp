import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";

// Dialog
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

// Tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Chart
import { BarChart } from "@mui/x-charts/BarChart";

// Icon
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// Dialog
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper style={{ width: "5404px", height: "553px" }} {...props} />
    </Draggable>
  );
}

// Tabs

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Activities = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  const [open, setOpen] = useState(false);

  const [profileAdded, setProfileAdded] = useState(false); // New state variable

  const handleDone = () => {
    // Assuming that you want to consider the profile added when user completes both tabs
    if (value === 1) {
      setProfileAdded(true);
      setOpen(false); // Close the dialog when the profile is added
    }
  };

  // Textfield state handle
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleYoutube = (e) => {
    setYoutube(e.target.value);
  };
  const handleInstagram = (e) => {
    setInstagram(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNext = () => {
    if (value < 1) {
      // Assuming you have 2 tabs (0 and 1)
      setValue(value + 1);
    }
  };
  const handleBack = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  console.log(name, email, phone, youtube, instagram);
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item md={12} sm={12}>
          <Card
            style={{
              background: "#FFFFFF",
              border: "2px solid #E0E0E0",
              boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["Week 1", "Week 2", "Week 3", "Week 4"],
                  },
                ]}
                series={[
                  { label: "Guest", data: [4, 3, 5, 7], color: "#98D89E" },
                  { label: "user", data: [1, 6, 3, 8], color: "#EE8484" },
                ]}
                width={800}
                height={359}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={6} sm={12} xs={6}>
          <Card
            style={{
              background: "#FFFFFF",
              border: "2px solid #E0E0E0",
              boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              height: " 256px",
            }}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "22px",
                    marginTop: "20px",
                    marginLeft: "20px",
                  }}
                >
                  Top Products
                </Typography>
                <Typography
                  style={{
                    marginLeft: "50px",
                    marginTop: "20px",
                    width: "97px",
                    height: "15px",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: " #858585",
                  }}
                >
                  May - June 2021
                </Typography>
              </div>
              <PieChart
                series={[
                  {
                    data: [
                      { value: 10, color: "#EE8484", label: "Super Hoodies" },
                      { value: 20, color: "#98D89E", label: "Basic Tees" },
                      {
                        value: 15,
                        color: "#F6DC7D",
                        label: "Custom Short Pants ",
                      },
                    ],
                    innerRadius: 50,
                    outerRadius: 70,
                    paddingAngle: -1,
                    cornerRadius: 0,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 80,
                    cy: 100,
                  },
                ]}
                width={282.98}
                height={282.98}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} sm={12} xs={6}>
          {profileAdded ? (
            <Card
              style={{
                background: "#FFFFFF",
                border: "2px solid #E0E0E0",
                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                height: "256px",
                width: "100%",
              }}
            >
              <CardContent>
                <Typography
                  style={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#000000",
                    fontFamily: "Montserrat",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  {name}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                    marginTop: "70px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#E9F9EB",
                        borderRadius: "50%",
                        marginRight: "8px", // Add some margin for spacing
                      }}
                    >
                      <WhatsAppIcon
                        style={{
                          width: "17px",
                          height: "17px",
                          color: "#3CC952",
                        }}
                      />
                    </Avatar>
                    <Typography
                      style={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                        /* identical to box height, or 171% */
                        display: "flex",
                        alignItems: "center",
                        textDecorationLine: "underline",

                        color: "#231F20",
                      }}
                    >
                      {phone}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#FFE9EC",
                        borderRadius: "50%",
                        marginRight: "8px", // Add some margin for spacing
                      }}
                    >
                      <img
                        alt="instagram"
                        src="/icons/instagram.svg"
                        style={{
                          width: "19px",
                          height: "19px",
                          color: "#3CC952",
                        }}
                      />
                    </Avatar>
                    <Typography
                      style={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                        /* identical to box height, or 171% */
                        display: "flex",
                        alignItems: "center",
                        textDecorationLine: "underline",

                        color: "#231F20",
                      }}
                    >
                      {instagram}
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#EBE6F9",
                        borderRadius: "50%",
                        marginRight: "8px", // Add some margin for spacing
                      }}
                    >
                      <img
                        src="/icons/email.svg"
                        alt="email"
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#3CC952",
                        }}
                      />
                    </Avatar>
                    <Typography
                      style={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                        /* identical to box height, or 171% */
                        display: "flex",
                        alignItems: "center",
                        textDecorationLine: "underline",

                        color: "#231F20",
                      }}
                    >
                      {email}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      style={{
                        width: "28px",
                        height: "28px",
                        background: "#FFE9EC",
                        borderRadius: "50%",
                        marginRight: "8px", // Add some margin for spacing
                      }}
                    >
                      <img
                        alt="youtube"
                        src="/icons/youtube.svg"
                        style={{
                          width: "19px",
                          height: "19px",
                        }}
                      />
                    </Avatar>
                    <Typography
                      style={{
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                        /* identical to box height, or 171% */
                        display: "flex",
                        alignItems: "center",
                        textDecorationLine: "underline",

                        color: "#231F20",
                      }}
                    >
                      {youtube}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card
              style={{
                background: "#FFFFFF",
                border: "2px solid #E0E0E0",
                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                height: "256px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    style={{ border: "none" }}
                  >
                    <Avatar
                      style={{
                        width: "76.78px",
                        height: " 76.78px",
                        background: "#F5F5F5",

                        border: "1px solid #F2F2F2",
                      }}
                    >
                      <AddIcon
                        style={{
                          width: "51.19px",
                          height: "51.19px",
                          color: "#999CA0",
                        }}
                      />
                    </Avatar>
                  </Button>
                  <Typography
                    style={{
                      width: "100px",
                      height: "24px",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",
                      display: "flex",
                      alignItems: "center",
                      color: "#858585",
                    }}
                  >
                    Add Profile
                  </Typography>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                  >
                    <DialogTitle
                      style={{
                        cursor: "move",
                        display: "flex",
                        alignItems: "center",
                      }}
                      id="draggable-dialog-title"
                    >
                      <Typography
                        style={{
                          marginRight: "auto",
                          width: "252px",
                          height: "32px",
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: "600",
                          fontSize: "20px",
                          lineHeight: "32px",
                          color: "#231F20",
                        }}
                      >
                        Add New Profile
                      </Typography>
                      <div
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          alignItems: "start",
                        }}
                      >
                        <Button onClick={handleClose}>
                          <CloseIcon
                            style={{
                              width: "24px",
                              height: "24px",
                              color: "#999CA0",
                            }}
                          />
                        </Button>
                      </div>
                    </DialogTitle>

                    <DialogContent
                      style={{
                        height: "553px",
                        width: "544px",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                          sx={{
                            "& .Mui-selected": {
                              borderBottom: "2px solid #231F20",
                            },
                            "& .MuiTabs-indicator": {
                              backgroundColor: "#3F84F8",
                              height: 4,
                              borderRadius: "30px",
                            },
                            "& .MuiTab-root": {
                              "&:not(.Mui-selected)": {
                                borderBottom: "4px solid #D9D9D9",
                                marginRight: "30px",
                                height: 4,
                              },
                            },
                          }}
                        >
                          <Tab
                            label="Basic"
                            style={{
                              width: "50%",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "16px",
                              lineHeight: "24px",
                              marginRight: "30px",
                              color: "#231F20",
                              textTransform: "none",
                            }}
                          />
                          <Tab
                            label="Contact"
                            style={{
                              width: "50%",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "16px",
                              lineHeight: "24px",

                              color: "#231F20",
                              textTransform: "none",
                            }}
                          />
                        </Tabs>
                      </div>
                      {value === 0 && (
                        <CustomTabPanel value={value} index={0}>
                          <div>
                            <Typography
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                color: "#231F20",
                                marginBottom: "20px",
                              }}
                            >
                              *Enter Name
                            </Typography>
                            <TextField
                              value={name}
                              onChange={handleName}
                              size="small"
                              label="Eg. John Doe"
                              style={{
                                width: "100%",
                                border: "1px solid #F2F2F2",
                                borderRadius: "8px",
                              }}
                            />
                            <Typography
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                color: "#231F20",
                                marginBottom: "20px",
                                marginTop: "10px",
                              }}
                            >
                              *Enter Email
                            </Typography>
                            <TextField
                              value={email}
                              onChange={handleEmail}
                              size="small"
                              label="Eg. John@xyz.com"
                              style={{
                                width: "100%",
                                border: "1px solid #F2F2F2",
                                borderRadius: "8px",
                              }}
                            />
                            <Typography
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                color: "#231F20",
                                marginBottom: "20px",
                                marginTop: "10px",
                              }}
                            >
                              *Enter Phone
                            </Typography>
                            <TextField
                              value={phone}
                              onChange={handlePhone}
                              size="small"
                              label="Eg. 9897077689"
                              style={{
                                width: "100%",
                                border: "1px solid #F2F2F2",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                        </CustomTabPanel>
                      )}
                      {value === 1 && (
                        <CustomTabPanel value={value} index={1}>
                          <div>
                            <Typography
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                color: "#231F20",
                                marginBottom: "20px",
                                marginTop: "20px",
                              }}
                            >
                              Instagram Link{" "}
                              <span
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  marginLeft: "10px",
                                  color: "gray",
                                }}
                              >
                                (Optional)
                              </span>
                            </Typography>
                            <TextField
                              size="small"
                              value={instagram}
                              onChange={handleInstagram}
                              label="Eg. Instagram.com/username"
                              style={{
                                width: "100%",
                                border: "1px solid #F2F2F2",
                                borderRadius: "8px",
                              }}
                            />
                            <Typography
                              style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                color: "#231F20",
                                marginBottom: "20px",
                                marginTop: "20px",
                              }}
                            >
                              Youtube Link{" "}
                              <span
                                style={{
                                  fontStyle: "normal",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  marginLeft: "10px",
                                  color: "gray",
                                }}
                              >
                                (Optional)
                              </span>
                            </Typography>
                            <TextField
                              size="small"
                              value={youtube}
                              onChange={handleYoutube}
                              label="Eg. John@xyz.com"
                              style={{
                                width: "100%",
                                border: "1px solid #F2F2F2",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                        </CustomTabPanel>
                      )}
                    </DialogContent>
                    <DialogActions>
                      {value < 1 ? (
                        <Button
                          onClick={handleNext}
                          style={{
                            width: "64px",
                            background: "#3E84F8",
                            borderRadius: "8px",
                            textTransform: "none",
                            color: "white",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "14px",
                          }}
                        >
                          Next
                        </Button>
                      ) : (
                        <>
                          <Button
                            onClick={handleBack}
                            style={{
                              boxSizing: "border-box",
                              border: "1px solid #999CA0",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontFamily: "Montserrat",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                              lineHeight: "24px",
                              color: "#231F20",
                              textTransform: "none",
                            }}
                          >
                            Back
                          </Button>
                          <Button
                            onClick={handleDone}
                            style={{
                              width: "64px",
                              background: "#3E84F8",
                              borderRadius: "8px",
                              textTransform: "none",
                              color: "white",
                              fontFamily: "Montserrat",
                              fontStyle: "normal",
                              fontWeight: "600",
                              fontSize: "14px",
                            }}
                          >
                            Done
                          </Button>
                        </>
                      )}
                    </DialogActions>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Activities;
