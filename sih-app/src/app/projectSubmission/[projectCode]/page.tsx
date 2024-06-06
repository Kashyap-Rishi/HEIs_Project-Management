"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Stack,
  Chip
} from "@mui/material";
import { useRouter } from 'next/navigation';

type Params = {
  params: {
    projectCode: string;

  };
};


const SignupProject = ({ params: { projectCode } }: Params) => {
  const [errorMessage, setErrorMessage] = useState("");
  const router=useRouter();

  const formik = useFormik({
    initialValues: {
      projectDetailsCode: "",
      groupNumber: "",
      title: "",
      description: "",
      requirements: "",
      timeline: "",
      teamMembers: [],
      resources: [],
      documentationPath: "",
      githubLink: "",
      videoLink: "",
      techStacks: [],
      results: "",
      grade: "",
      rejectionSummary: "",
      rollNo:"",
      projectCode:projectCode
    },
    validationSchema: Yup.object().shape({
      projectDetailsCode: Yup.string().required("Project Details Code is required"),
      groupNumber: Yup.number().positive("Group Number must be a positive integer"),
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      requirements: Yup.string().required("Requirements are required"),
      timeline: Yup.string(),
      teamMembers: Yup.array().of(Yup.string()),
      resources: Yup.array().of(Yup.string()),
      documentationPath: Yup.string().required("Documentation Path is required"),
      githubLink: Yup.string().required("GitHub Link is required"),
      videoLink: Yup.string().required("Video Link is required"),
      techStacks: Yup.array().of(Yup.string()),
      results: Yup.string().required("Results are required"),
      grade: Yup.string(),
      rollNo: Yup.string(),
      rejectionSummary: Yup.string(),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:8000/api/project/createprojectDetails", values)
        .then((response) => {
          console.log("Project creation success:", response);
          formik.resetForm();
          router.back();
        })
        .catch((error) => {
          console.error("Project creation failed:", error);
          setErrorMessage(error.message);
        });
    },
  });

  const handleCloseSnackbar = () => {
    setErrorMessage("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, p: 4, border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <Typography variant="h4" align="center" gutterBottom>
        SUBMIT PROJECT
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
         
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Project Code"
              name="projectDetailsCode"
              value={formik.values.projectDetailsCode}
              onChange={formik.handleChange}
              error={formik.touched.projectDetailsCode && Boolean(formik.errors.projectDetailsCode)}
              helperText={formik.touched.projectDetailsCode && formik.errors.projectDetailsCode}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Group Number"
              name="groupNumber"
              type="number"
              value={formik.values.groupNumber}
              onChange={formik.handleChange}
              error={formik.touched.groupNumber && Boolean(formik.errors.groupNumber)}
              helperText={formik.touched.groupNumber && formik.errors.groupNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Requirements"
              name="requirements"
              multiline
              rows={4}
              value={formik.values.requirements}
              onChange={formik.handleChange}
              error={formik.touched.requirements && Boolean(formik.errors.requirements)}
              helperText={formik.touched.requirements && formik.errors.requirements}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Timeline"
              name="timeline"
              value={formik.values.timeline}
              onChange={formik.handleChange}
              error={formik.touched.timeline && Boolean(formik.errors.timeline)}
              helperText={formik.touched.timeline && formik.errors.timeline}
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
            />
          </Grid>

          <Grid item xs={12}>
          <Grid item xs={12}>
  <TextField
    fullWidth
    label="Team Members"
    name="teamMembersInput"
    value={formik.values.teamMembers}
    onChange={(event) => {
      formik.handleChange(event);
      const input = event.target.value;
      const teamMembers = input.split(",").map((member) => member.trim());
      formik.setFieldValue("teamMembers", teamMembers);
    }}
    error={formik.touched.teamMembers && Boolean(formik.errors.teamMembers)}
    helperText={formik.touched.teamMembers && formik.errors.teamMembers}
  />
  <Stack direction="row" spacing={1} mt={1}>
    {formik.values.teamMembers.map((member, index) => (
      <Chip
        key={index}
        label={member}
        onDelete={() => {
          const updatedMembers = [...formik.values.teamMembers];
          updatedMembers.splice(index, 1);
          formik.setFieldValue("teamMembers", updatedMembers);
        }}
      />
    ))}
  </Stack>
</Grid>


          </Grid>
          <Grid item xs={12}>
  <TextField
    fullWidth
    label="Resources"
    name="resourcesInput"
    value={formik.values.resources}
    onChange={(event) => {
      formik.handleChange(event);
      const input = event.target.value;
      const resources = input.split(",").map((resource) => resource.trim());
      formik.setFieldValue("resources", resources);
    }}
    error={formik.touched.resources && Boolean(formik.errors.resources)}
    helperText={formik.touched.resources && formik.errors.resources}
  />
  <Stack direction="row" spacing={1} mt={1}>
    {formik.values.resources.map((resource, index) => (
      <Chip
        key={index}
        label={resource}
        onDelete={() => {
          const updatedResources = [...formik.values.resources];
          updatedResources.splice(index, 1);
          formik.setFieldValue("resources", updatedResources);
        }}
      />
    ))}
  </Stack>
</Grid>

          {/* Second Step Fields */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Documentation Path"
              name="documentationPath"
              value={formik.values.documentationPath}
              onChange={formik.handleChange}
              error={formik.touched.documentationPath && Boolean(formik.errors.documentationPath)}
              helperText={formik.touched.documentationPath && formik.errors.documentationPath}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GitHub Link"
              name="githubLink"
              value={formik.values.githubLink}
              onChange={formik.handleChange}
              error={formik.touched.githubLink && Boolean(formik.errors.githubLink)}
              helperText={formik.touched.githubLink && formik.errors.githubLink}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Video Link"
              name="videoLink"
              value={formik.values.videoLink}
              onChange={formik.handleChange}
              error={formik.touched.videoLink && Boolean(formik.errors.videoLink)}
              helperText={formik.touched.videoLink && formik.errors.videoLink}
              required
            />
          </Grid>
          <Grid item xs={12}>
  <TextField
    fullWidth
    label="Tech Stacks"
    name="techStacksInput"
    value={formik.values.techStacks}
    onChange={(event) => {
      formik.handleChange(event);
      const input = event.target.value;
      const techStacks = input.split(",").map((stack) => stack.trim());
      formik.setFieldValue("techStacks", techStacks);
    }}
    error={formik.touched.techStacks && Boolean(formik.errors.techStacks)}
    helperText={formik.touched.techStacks && formik.errors.techStacks}
  />
  <Stack direction="row" spacing={1} mt={1}>
    {formik.values.techStacks.map((techStack, index) => (
      <Chip
        key={index}
        label={techStack}
        onDelete={() => {
          const updatedTechStacks = [...formik.values.techStacks];
          updatedTechStacks.splice(index, 1);
          formik.setFieldValue("techStacks", updatedTechStacks);
        }}
      />
    ))}
  </Stack>
</Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Results"
              name="results"
              multiline
              rows={4}
              value={formik.values.results}
              onChange={formik.handleChange}
              error={formik.touched.results && Boolean(formik.errors.results)}
              helperText={formik.touched.results && formik.errors.results}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={errorMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Container>
  );
};

export default SignupProject;
