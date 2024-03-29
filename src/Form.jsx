import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate()


  const logar = (event) => {
    event.preventDefault()
    console.log('logou');
    navigate('/')
  }


  return (
    <>
      <div className="container">
      <main className="form-signin ">
        <form onSubmit= {logar} >
          <img
            className="mb-4"
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
      </div>
    </>
  );
}

export default App;
