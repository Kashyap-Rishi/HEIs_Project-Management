"use client";
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
  Grid,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const   SignupProfessor=() => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstname:"",
      lastname:"",
      email:"",
      phoneNumber:"",
      institute:"",
      rollNo:"",
      username: "",
      password: "",
      confirmPassword: "",
      role: "",
      
    },
    validationSchema: step === 1 ? StepOneSchema : StepTwoSchema,
    onSubmit: (values) => {
      if (step === 1) {
        axios
          .post("http://localhost:8000/api/professor/signup", {
            firstname: values.firstname,
            lastname: values.lastname,
            rollNo: values.rollNo,
            phoneNumber: values.phoneNumber,
            email: values.email,    
            institute:values.institute
          })
          .then((response) => {
            console.log("Registration success:", response);
            setStep(step + 1);
          })
          .catch((error) => {
            console.error("Registration failed:", error);
            setErrorMessage(error.response.data.message);
          });
      } else {
        axios
          .post("http://localhost:8000/api/user/signup", {
            username: values.username,
            password: values.password,
            role: values.role,
            code: values.rollNo,
          })
          .then((response) => {
            console.log("Account creation success:", response);
            router.push("/professorlogin");
          })
          .catch((error) => {
            console.error("Account creation failed:", error);
            setErrorMessage(error.response.data.message);
          });
      }
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
      <Typography sx={{paddingBottom:'5',fontWeight:'bold',letterSpacing:'0.001px'}} variant="h4" align="center" gutterBottom>
       REGISTER PROFESSOR
      </Typography>
      <Stepper activeStep={step - 1} alternativeLabel sx={{ mb: 4 }}>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
      </Stepper>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
    <Grid container spacing={2}>
    {/* First Name and Last Name */}
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="First Name"
        name="firstname"
        value={formik.values.firstname}
        onChange={formik.handleChange}
        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
        helperText={formik.touched.firstname && formik.errors.firstname}
        required
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        fullWidth
        label="Last Name"
        name="lastname"
        value={formik.values.lastname}
        onChange={formik.handleChange}
        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
        helperText={formik.touched.lastname && formik.errors.lastname}
        required
      />
    </Grid>
    {/* Email */}
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        required
      />
    </Grid>
    {/* Phone Number */}
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Phone Number"
        name="phoneNumber"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        required
      />
    </Grid>
    {/* Institute */}
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Institute"
        name="institute"
        value={formik.values.institute}
        onChange={formik.handleChange}
        error={formik.touched.institute && Boolean(formik.errors.institute)}
        helperText={formik.touched.institute && formik.errors.institute}
        required
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label="Roll No"
        name="rollNo"
        value={formik.values.rollNo}
        onChange={formik.handleChange}
        error={formik.touched.rollNo && Boolean(formik.errors.rollNo)}
        helperText={formik.touched.rollNo && formik.errors.rollNo}
        required
      />
    </Grid>

    <Grid item xs={12}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </Grid>
  </Grid>
        )}
        {step === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Role"
                name="role"
                select
                value={formik.values.role}
                onChange={formik.handleChange}
                error={formik.touched.role && Boolean(formik.errors.role)}
                helperText={formik.touched.role && formik.errors.role}
                required
              >
                <MenuItem value="institute">Institute</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="professor">Professor</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
        <Snackbar
          open={!!errorMessage} 
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={errorMessage}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </form>
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Already have an account?{" "}
        <Button
          color="primary"
          onClick={() => router.push('/professorlogin')} 
          style={{ textTransform: 'none' }}
        >
          Login
        </Button>
      </Typography>
    </Container>
  );
};

const StepOneSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  institute: Yup.string().required("Institute is required"),
  rollNo: Yup.string().required("Roll No is required"),
});


const StepTwoSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(7, "Must be at least 7 characters")
    .max(255)
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  role: Yup.string().required("Role is required"),
  
});

export default SignupProfessor;
