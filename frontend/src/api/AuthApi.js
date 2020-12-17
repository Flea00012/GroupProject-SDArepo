import Api from "./Api";

class AuthApi {
  authenticate({ email, password }) {
    return Api.post("/authenticate", { email, password });
  }

  register({ name, email, password, userRole }) {
    return Api.post("/register", { name, email, password, userRole });
  }
}

export default new AuthApi();
