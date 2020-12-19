//base level Axios instance with BaseUrl
import Api from './Api';

//class component with the Axios instance for Authentication
class AuthApi {
  authenticate({ email, password }) {
    return Api.post('/authenticate', { email, password });
  }

  register({ name, email, password, userRole }) {
    return Api.post('/register', { name, email, password, userRole });
  }
}

export default new AuthApi();
