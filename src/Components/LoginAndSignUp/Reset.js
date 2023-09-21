import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
              justifyContent: "center",
        marginTop:'40px'
      }}
    >
      <Card
        style={{ background: " #F8FAFF", boxShadow: "none", width: "400px",borderRadius:'20px' }}
      >
        <CardContent>
          <Typography
            style={{
              height: "20.86px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "19px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Reset Password
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              className="reset__btn"
              onClick={() => sendPasswordReset(email)}
              style={{
                textTransform: "none",
                background: "#4285F4",
                borderRadius: "10px",
                width: "356.77px",
                height: "43.91px",
                marginTop: "20px",
              }}
            >
              Send password reset email
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#4285F4",
                textDecoration: "none",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            >
              Register
            </Link>
            now.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Reset;
