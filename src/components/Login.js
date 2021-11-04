import React, { useState } from "react";
import "./login.css";
import Signin from "./Signin";
function Login() {
  const [signin, setSignin] = useState(false);
  return (
    <div className="login">
      <div className="login_header">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        />

        <button className="login_button">Sign In</button>
      </div>
      <div className="login_body">
        {signin ? (
          <Signin />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <br />
            <h3>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login_form">
              <input type="text" placeholder="Email Address" />
              <button onClick={() => setSignin(true)}>Get started</button>
            </form>
          </>
        )}
      </div>
      <div className="login_gradient"></div>
    </div>
  );
}

export default Login;
