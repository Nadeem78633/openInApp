import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

// Importing from the firebase file
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <Grid item xs={12} sm={12} md={6} style={{ background: " #F8FAFF" }}>
      <Card style={{ background: " #F8FAFF", boxShadow: "none" }}>
        <CardContent>
          <div
            style={{
              marginTop: "100px",
            }}
          >
            <Typography
              style={{
                /* Sign In */

                width: "143.81px",
                height: "48.3px",
                left: "813.18px",
                top: "235.32px",

                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "44px",

                color: "#000000",
              }}
            >
              Sign In
            </Typography>
          </div>
          <Typography
            style={{
              /* Sign in to your account */
              marginTop: "5px",

              height: "20.86px",
              left: "813.18px",
              top: "289.11px",

              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",

              color: "#000000",
            }}
          >
            Sign into your account
          </Typography>
          <div style={{ marginTop: "20px" }}>
            <Button
              onClick={signInWithGoogle}
              variant="contained"
              style={{
                background: "#FFFFFF",
                borderRadius: "10px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15px",
                width: "197.6px",
                height: "32.93px",
                /* Secondary Text */
                color: "#858585",
                textTransform: "none",
              }}
            >
              <img
                src="/icons/google.svg"
                style={{
                  width: "15.37px",
                  height: "15.37px",
                  marginRight: "10px",
                }}
              />
              Sign in With google
            </Button>
            <Button
              variant="contained"
              style={{
                background: "#FFFFFF",
                borderRadius: "10px",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "15px",
                width: "197.6px",
                height: "32.93px",
                /* Secondary Text */
                color: "#858585",
                textTransform: "none",
                marginLeft: "28px",
              }}
            >
              <img
                src="/icons/apple.svg"
                style={{
                  width: "15.37px",
                  height: "15.37px",
                  marginRight: "10px",
                }}
              />
              Sign in With Apple
            </Button>
          </div>
          <Card
            style={{
              width: "422.64px",
              height: "390.8px",
              background: "#FFFFFF",
              borderRadius: "20px",
              marginTop: "40px",
            }}
          >
            <CardContent style={{ margin: "auto", marginTop: "20px" }}>
              <Typography
                style={{
                  height: "20.86px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom: "10px",
                }}
              >
                Email address
              </Typography>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "356.77px",
                  height: "43.91px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  background: "#F5F5F5",
                  borderRadius: "10px",
                  border: "2px solid #F5F5F5",
                  paddingLeft: "20px",
                }}
                type="text"
                placeholder="Email"
              />
              <Typography
                style={{
                  height: "20.86px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                Password
              </Typography>
              <input
                style={{
                  width: "356.77px",
                  height: "43.91px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  background: "#F5F5F5",
                  borderRadius: "10px",
                  border: "2px solid #F5F5F5",
                  paddingLeft: "20px",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Link
                  to="/reset"
                  style={{
                    width: "136.12px",
                    height: "20.86px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "19px",
                    /* Link */
                    color: "#346BD5",
                    textDecoration: "none",
                    marginTop: "20px",
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => logInWithEmailAndPassword(email, password)}
                  variant="contained"
                  style={{
                    textTransform: "none",
                    background: "#4285F4",
                    borderRadius: "10px",
                    width: "356.77px",
                    height: "43.91px",
                  }}
                >
                  Sign in
                </Button>
              </div>
              <Typography
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  height: "20.86px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#858585",
                }}
              >
                Don't have an account
                <Link
                  to="/register"
                  style={{
                    color: "#4285F4",
                    textDecoration: "none",
                    marginLeft: "10px",
                  }}
                >
                  Register here
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
