import Api from "./Api";

class UserApi {
  getCurrentUser() {
    return Api.get("/currentUser");
  }
}
export default new UserApi();
