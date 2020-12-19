//base level Axios instance with BaseUrl
import Api from './Api';

//class component with the Axios instance for user
class UserApi {
  getCurrentUser() {
    return Api.get('/currentUser');
  }
}
export default new UserApi();
