//react core
import React, { useState } from "react";
import "../../css/styles.css";
import book from "../../images/undraw_education_f8ru.svg";
import history from "../../images/undraw_voice_interface_eckp.svg";

//loginform component
function LoginForm({ onSubmit, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userRole, setUserRole] = useState("");

  //changeModeAdd component
  function changeModeAdd() {
    const container = document.querySelector(".login-container");
    container.classList.add("sign-up-mode");
  }
  //changeModeRemove compnent
  function changeModeRemove() {
    const container1 = document.querySelector(".login-container");
    container1.classList.remove("sign-up-mode");
  }

  return (
    <div class="login-container">
      <div class="forms-container">
        <div class="signin-signup">
          <form class="sign-in-form">
            <h2 class="login-title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="button"
              value="Login"
              onClick={() => onSubmit({ email, password })}
              class="login-btn solid"
            />
          </form>
          <form class="sign-up-form">
            <h2 class="login-title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="social-media">
              <input
                className="social-icon"
                type="radio"
                name="userRole"
                value={"teacher"}
                onChange={(e) => setUserRole(e.target.value)}
              />
              Teacher
              <input
                className="social-icon"
                type="radio"
                name="userRole"
                value={"student"}
                onChange={(e) => setUserRole(e.target.value)}
              />
              Student
            </div>

            <input
              type="button"
              class="login-btn"
              value="Sign up"
              onClick={(e) => onRegister({ name, email, password, userRole })}
            />
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="login-panel left-panel">
          <div class="login-content">
            <h3>Ready to join?</h3>
            <p>
              Take the first step of your journey to knowledge with us. Join now
            </p>
            <button
              class="login-btn transparent"
              id="sign-up-btn"
              onClick={() => changeModeAdd()}
            >
              Sign up
            </button>
          </div>
          <img src={history} class="login-image" alt="" />
        </div>
        <div class="login-panel right-panel">
          <div class="login-content">
            <h3>Already registered ?</h3>
            <p>Explore the limitless world of Learning</p>
            <button
              class="login-btn transparent"
              id="sign-in-btn"
              onClick={() => changeModeRemove()}
            >
              Sign in
            </button>
          </div>
          <img src={book} class="login-image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
