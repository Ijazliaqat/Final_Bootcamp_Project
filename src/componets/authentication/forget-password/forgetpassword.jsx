import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forget() {
  return (
    <main className="form-signin d-flex justify-content-center">
  <form>
    
    <h1 class="h3 mt-5 mb-3 fw-normal justify-content-center">Forget Password</h1>
    <h1 class="h6 mb-3 fw-normal">Enter you Registered email adress</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
   
    <button class="w-100 btn btn-lg btn-success mt-5" type="submit">Reset Password</button>
    <p class="mt-5 mb-3 ">Not a Member? <a href="">Signup for a account now</a></p>
    
  </form>
</main>
  );
}

export default Forget;