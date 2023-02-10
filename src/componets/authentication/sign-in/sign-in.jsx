import React from "react";
import google from "../../../assets/images/google.png";
import Facebook from "../../../assets/images/facebook.png";
import GitHub from "../../../assets/images/GitHub.png";
import useSignIn from "./use-sign-in";
import { Formik, Form, Field } from "formik";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./sigin-in.css";
import AppAlert from "../../app-alert/app-alert";
import { Link } from "react-router-dom";
import { Alert, Grid } from "@mui/material";

export const SignIn = () => {
  const { initialValuesSignIn, signInSchema, signInHandler, error } =
    useSignIn();

  return (
    <>
      <Grid className="mx-3 mt-3 border-bottom">
        <h1 className="fw-bold text-success">
          Bite <span className="text-secondary">Bazaar</span>
        </h1>
      </Grid>
      <div className="container mt-4">
        <div className="d-flex flex-wrap  justify-content-center">
          <div className="border border-danger rounded-5 my-2 py-2 px-4 d-flex mx-2">
           <GoogleIcon />
            <h5 className="mx-2">Google</h5>
          </div>
          <div>
            <div className="border border-primary rounded-5 my-2 py-2 px-4 d-flex mx-2">
              <FacebookIcon />
              <h5 className="mx-2">Facebook</h5>
            </div>
          </div>
          <div>
            <div className="border border-dark rounded-5 my-2 py-2 px-4 d-flex mx-2">
            <GitHubIcon/>
              <h5 className="mx-2">GitHub</h5>
            </div>
          </div>
        </div>
       
        <main className="form-signin w-50 mt-5 m-auto">
          <Formik
            initialValues={initialValuesSignIn}
            validationSchema={signInSchema}
            onSubmit={signInHandler}
          >
            {({ errors, touched }) => (
              <Form>
                <h1 className="h3 fw-bold text-center mb-3 fw-normal">
                  Please sign in
                </h1>
                <h6 className="text-center text-danger">{error}</h6>

                <div className="form-floating">
                  <Field
                    name="email"
                    type="email"
                    className="col-12 field-input"
                    placeholder="Enter Email"
                  />
                  {errors?.email && touched?.email && (
                    <div className="text-danger">{errors?.email}</div>
                  )}
                </div>
                <div className="form-floating my-2">
                  <Field
                    name="password"
                    type="password"
                    className="col-12  field-input"
                    placeholder="Password"
                  />
                  {errors?.password && touched.password && (
                    <div className="text-danger">{errors?.password}</div>
                  )}
                </div>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">
                  Sign in
                </button>
                <div className="position-relative">
                  <Link to="/signup">
                    <button
                      type="button"
                      className="btn btn-secondary mt-3 position-absolute bottom-3 end-0"
                    >
                      Create New Account
                    </button>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </main>
      </div>
    </>
  );
};

export default SignIn;
