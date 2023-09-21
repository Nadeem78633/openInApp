import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// Components
import Sidebar from "./Sidebar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  display: "flex", // Add display flex to align children horizontally
  alignItems: "center", // Align children vertically in the middle
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  right: 0, // Move the icon to the right
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "52px",
  height: "17px",

  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
  /* identical to box height */

  /* Light grey */
  color: "#B0B0B0",
  background: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing()})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "197.6px",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{ width: "100%", background: "#F8FAFF" ,boxShadow:'none'}}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "29px",
                textDecoration: "none",
                color: "black",
              }}
            >
              Dashboard
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
              
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Sidebar />
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
              style={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "14px",
                color: "black",

                textDecoration: "none",
              }}
            >
              Dashboard
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Search>
              <StyledInputBase
                style={{
                  width: "197.5px",
                  height: "32.93px",
                  borderRadius: "10px",
                  marginRight: "10px",
                  color: "",
                }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper>
                <SearchIcon
                  style={{
                    width: "18px",
                    height: "18px",

                    color: "#858585",
                    marginRight: "10px",
                  }}
                />
              </SearchIconWrapper>
            </Search>
            <img
              src="/icons/notification.svg"
              style={{ marginRight: "10px" }}
            />

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/icons/profile.png"
                    style={{ width: "30px", height: "30px" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Header;
