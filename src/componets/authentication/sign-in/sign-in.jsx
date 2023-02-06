import React from 'react'
import google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import GitHub from '../../../assets/images/GitHub.png';
import useSignIn from './use-sign-in';
import { Formik, Form, Field } from 'formik';
import './sigin-in.css'

export const SignIn = () => {
  const { initialValuesSignIn, signInSchema, signInHandler } = useSignIn();

  return (
    <>
      <div className='container'>
        <div className='d-flex flex-wrap  justify-content-center'>
          <div className='border border-danger rounded-5 my-2 py-2 px-4 d-flex mx-2'>
            <img src={google} alt="googleicon" />
            <h5 className='mx-2'>Google</h5>
          </div>
          <div >
            <div className='border border-primary rounded-5 my-2 py-2 px-4 d-flex mx-2'>
              <img src={Facebook} alt="Facebookicon" />
              <h5 className='mx-2'>Facebook</h5>
            </div>
          </div>
          <div >
            <div className='border border-dark rounded-5 my-2 py-2 px-4 d-flex mx-2'>
              <img src={GitHub} alt="GitHubicon" />
              <h5 className='mx-2'>GitHub</h5>
            </div>
          </div>
        </div>
        {/* <div className="containerGF d-flex">
          <div className="container-1">
            <span><img src={google} alt="googleicon" /></span>
            <h5>Google</h5>
          </div>

          <div className="container-2">
            <span><img src={Facebook} alt="facebookicon" /></span>
            <h5>Facebook</h5>
          </div>
          <div className="container-3">
            <span><img src={GitHub} alt="GitHubicon" /></span>
            <h5>GitHub</h5>
          </div>
        </div> */}
        <div className='container-4 my-5 py-5 px-8 d-flex mx-2'>
          {/* <p className='or my-2 py-2 px-4 d-flex mx-2'>OR</p> */}
        </div>
        {/* <div className='container-5'><hr /></div> */}

        {/* <div className="form">

          <h2>Sign In!</h2>

          <input className='' type="email " name='email' placeholder='Enter email here' />

          <input type="password" name="" placeholder="Enter password here" />

          <button className="btnn">Sign In</button>

          <a href="link">Don't have an account?</a>

          <div><a href="#">Sign Up</a> Here.</div>

        </div> */}

        <main className="form-signin w-50 m-auto">
          <Formik
            initialValues={initialValuesSignIn}
            validationSchema={signInSchema}
            onSubmit={signInHandler}
          >
            {({ errors, touched }) => (
              <Form>
                <h1 className="h3 text-center mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                  <Field name='email' type='email' className='col-12 field-input'  placeholder="Enter Email" />
                 {errors.email&& touched.email && <div  className='text-danger'>{errors.email}</div> }
                </div>
                <div className="form-floating my-2">
                  <Field name='password' type='password' className='col-12  field-input' placeholder='Password'/>
                  {errors.password&& touched.password && <div className='text-danger'>{errors.password}</div> }
                </div>

                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
              </Form>)}
          </Formik>
        </main>
      </div>
    </>
  );
};

export default SignIn;