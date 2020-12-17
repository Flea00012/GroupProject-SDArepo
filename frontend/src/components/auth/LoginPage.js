import React from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";

function LoginPage() {
  const login = async (loginData) => {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  };

  const register = async (registrationData) => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  };

  return (
    <div>
      <LoginForm onSubmit={login} onRegister={register} />
    </div>
  );
}

export default LoginPage;
