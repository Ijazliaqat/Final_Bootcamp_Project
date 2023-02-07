import React from "react";
import "./sign-up.css";
import google from "../sign-up/icons/Google-Icon.jpg";
import facebook from "../sign-up/icons/facebookIcon.png";
import userIcon from "../sign-up/icons/userIcon.jpg";
import emailIcon from "../sign-up/icons/emailIcon.png";
import passworIcon from "../sign-up/icons/passwordIcon.png";
import { Field, Form, Formik } from "formik";
import useSignUp from "./use-sign-up";
import AppAlert from "../../app-alert/app-alert";

export const SignUp = () => {

  const { initialValuesSignUp, signUpSchema, signUpHandler, error } = useSignUp();

  return (
    <>
      <div className="container ">
       {error && <div class="alert col-3 position-absolute top-2 end-0 alert-warning alert-dismissible fade show" role="alert">
          {error}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
        <h1 className="d-flex justify-content-center">Get Started for free!</h1>

        <div className="containerGF">
          <div className="container-1">
            <span className="imageGF">
              <img src={google} alt="googleIcon" />
            </span>
            <h5>Google</h5>
          </div>

          <div className="container-2">
            <span className="imageGF">
              <img src={facebook} alt="facebookIcon" />
            </span>
            <h5>Facebook</h5>
          </div>
        </div>
        <span>
          <hr />
        </span>
        <h6 id="or">OR</h6>
        <span>
          <hr />
        </span>

        <Formik
          initialValues={initialValuesSignUp}
          validationSchema={signUpSchema}
          onSubmit={signUpHandler}
        >
          {({ errors, touched }) => (
            <Form>
              <h1 className="h3 text-center mb-3 fw-normal">Please Sign Up</h1>
              <div className="form-floating mb-2">
                <Field name='name' type='text' className='col-12 field-input' placeholder="Name" />
                {errors.name && touched.name && <div className='text-danger'>{errors.name}</div>}
              </div>
              <div className="form-floating">
                <Field name='email' type='email' className='col-12 field-input' placeholder="Enter Email" />
                {errors.email && touched.email && <div className='text-danger'>{errors.email}</div>}
              </div>
              <div className="form-floating my-2">
                <Field name='password' type='password' className='col-12  field-input' placeholder='Password' />
                {errors.password && touched.password && <div className='text-danger'>{errors.password}</div>}
              </div>

              <button className="w-100 btn btn-lg btn-success" type="submit">Sign Up</button>
            </Form>)}
        </Formik>

        {/* <form>
          <div className="mb-3 d-flex justify-content-center">
            <label className="signUpLabel">
              <img src={userIcon} alt="userIcon" />
            </label>
            <div className="col-sm-6 text-center">
              <input
                className="form-control"
                type="text"
                spellCheck="false"
                placeholder="Enter Your Full Name"
                required
              />
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <label for="inputEmail" className="signUpLabel ">
              <img src={emailIcon} alt="emailIcon" />
            </label>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="email"
                id="email"
                autoComplete="new-password"
                spellCheck="false"
                placeholder="Enter Your Email Address"
                required
              />
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <label for="inputPassword" className="signUpLabel">
              <img src={passworIcon} alt="emailIcon" />
            </label>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="password"
                id="password1"
                autoComplete="off"
                spellCheck="false"
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <label for="confirmPassword" className="signUpLabel">
              <img src={passworIcon} alt="emailIcon" />
            </label>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="password"
                id="password2"
                autoComplete="off"
                spellCheck="false"
                placeholder="Confirm Your Password"
                required
              />
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-center">
            <span>
              <a href="/">Already Have Account?</a>
            </span>
          </div>
          <div className="buttonContainer d-flex justify-content-center">
            <button type="button" className="btn btn-success my-3">
              Get Start Now
            </button>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default SignUp;
