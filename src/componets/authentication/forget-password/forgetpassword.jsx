import React from 'react';
import { useState } from 'react';



function Forget() {


  const [email, setEmail] = useState('');
  console.log(email)
   
  function handleSubmit(e) {
      e.preventDefault();

        console.log('Your form submit.');
      
  };


  function handleClick(e) {
    e.preventDefault();

     console.log('You click submit.');
    
};
    
    
  return (
    <main className="form-signin d-flex justify-content-center">
  <form onSubmit={handleSubmit}>
    
    <h1 className="h3 mt-5 mb-3 fw-normal justify-content-center">Forget Password</h1>
    <h1 className="h6 mb-3 fw-normal">Enter you Registered email adress</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange={(event) =>
          setEmail(event.target.value)}/>
          
      <label for="floatingInput">Email address</label>
    </div>
   
    <button className="w-100 btn btn-lg btn-success mt-5" value={email} type='submit' onClick={handleClick} >Reset Password</button>
    <p className="mt-5 mb-3 ">Not a Member? <a href="">Signup for a account now</a></p>
    
    
  </form>
</main>
  );
  }

export default Forget;