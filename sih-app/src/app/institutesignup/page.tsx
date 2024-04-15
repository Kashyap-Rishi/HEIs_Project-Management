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

const SignupInstitute = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      website: "",
      establishmentYear: "",
      username: "",
      password: "",
      confirmPassword: "",
      role: "",
      instituteCode: "",
    },
    validationSchema: step === 1 ? StepOneSchema : StepTwoSchema,
    onSubmit: (values) => {
      if (step === 1) {
        axios
          .post("http://localhost:8000/api/institute/signup", {
            name: values.name,
            instituteCode: values.instituteCode,
            address: values.address,
            phoneNumber: values.phoneNumber,
            email: values.email,
            website: values.website,
            establishmentYear: values.establishmentYear,
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
            code: values.instituteCode,
          })
          .then((response) => {
            console.log("Account creation success:", response);
            router.push("/studentlogin");
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
       REGISTER INSTITUTE
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Institute Code"
                name="instituteCode"
                value={formik.values.instituteCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.instituteCode &&
                  Boolean(formik.errors.instituteCode)
                }
                helperText={
                  formik.touched.instituteCode && formik.errors.instituteCode
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
                required
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Website"
                name="website"
                value={formik.values.website}
                onChange={formik.handleChange}
                error={formik.touched.website && Boolean(formik.errors.website)}
                helperText={formik.touched.website && formik.errors.website}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Establishment Year"
                name="establishmentYear"
                type="number"
                value={formik.values.establishmentYear}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  formik.setFieldValue(
                    "establishmentYear",
                    isNaN(value) ? "" : value
                  );
                }}
                error={
                  formik.touched.establishmentYear &&
                  Boolean(formik.errors.establishmentYear)
                }
                helperText={
                  formik.touched.establishmentYear &&
                  formik.errors.establishmentYear
                }
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
                fullWidth
                sx={{ mt: 2 }}
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
          onClick={() => router.push('/institutelogin')} 
          style={{ textTransform: 'none' }}
        >
          Login
        </Button>
      </Typography>
    </Container>
  );
};
const StepOneSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  website: Yup.string().url("Invalid URL"),
  establishmentYear: Yup.number().required("Establishment Year is required"),
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

export default SignupInstitute;
