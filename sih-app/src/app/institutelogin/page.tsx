"use client";
// Login.jsx

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";

const LoginInstitute = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/api/user/login", {
          username: values.username,
          password: values.password,
        })
        .then((response) => {
          const { token } = response.data;
        
        // Store the token in localStorage
        localStorage.setItem("token", token);
        router.push('/newpage')
          console.log("Login success:", response);
          
        })
        .catch((error) => {
          console.error("Login failed:", error);
          setErrorMessage("Invalid username or password");
        });
    },
  });

  const handleCloseSnackbar = () => {
    setErrorMessage("");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        p: 4,
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ mt: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 4 }}
        >
          Login
        </Button>
      </form>
      <Snackbar
        open={!!errorMessage} 
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Don't have an account?{" "}
        <Button
          color="primary"
          onClick={() => router.push('/institutesignup')}
          style={{ textTransform: 'none' }}
        >
          Sign Up
        </Button>
      </Typography>
    </Container>
  );
};

export default LoginInstitute;
