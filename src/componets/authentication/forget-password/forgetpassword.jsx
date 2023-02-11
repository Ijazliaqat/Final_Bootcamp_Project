import React from 'react';
import { useState } from 'react';



function Forget() {


  const [email, setEmail] = useState('');

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);

    if (!validateEmail(email)) {
      setError("Invalid email address");
    } else {
      setError(null);
    }
  };



  return (
    <main className="form-signin d-flex justify-content-center">
      <form onSubmit={handleSubmit}>

        <h1 className="h3 mt-5 mb-3 fw-normal justify-content-center">Forget Password</h1>
        <h1 className="h6 mb-3 fw-normal">Enter you Registered email adress</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange= {handleChange} />

          <label for="floatingInput">Email address</label>
        </div>
        <button className="w-100 btn btn-lg btn-success mt-5" value={email} type='submit' >Reset Password</button>
        {error && <p>{error}</p>}

        <p className="mt-5 mb-3 ">Not a Member? <a href="">Signup for a account now</a></p>


      </form>
    </main>
  );
  };

export default Forget;