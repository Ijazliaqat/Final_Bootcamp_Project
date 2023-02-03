import React from 'react'
import './sigin-in.css'
import google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';
import GitHub from '../../../assets/images/GitHub.png';

export const SignIn = () => {
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
              <img src={google} alt="googleicon" />
              <h5 className='mx-2'>Google</h5>
            </div>
          </div>
          <div >
            <div className='border border-dark rounded-5 my-2 py-2 px-4 d-flex mx-2'>
              <img src={google} alt="googleicon" />
              <h5 className='mx-2'>Google</h5>
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
        <div className='container-4'><hr />
          <p class='or'>OR</p>
        </div>

        {/* <div className="form">

          <h2>Sign In!</h2>

          <input className='' type="email " name='email' placeholder='Enter email here' />

          <input type="password" name="" placeholder="Enter password here" />

          <button className="btnn">Sign In</button>

          <a href="link">Don't have an account?</a>

          <div><a href="#">Sign Up</a> Here.</div>

        </div> */}

        <main class="form-signin w-50 m-auto">
          <form>
              <h1 class="h3 text-center mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
            
          </form>
        </main>
      </div>
    </>
  );
};

export default SignIn;