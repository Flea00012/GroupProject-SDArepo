import Api from "./Api";

class CoursesApi {
  getAllCourses() {
    return Api.get("/courses");
  }

  getCourseById(id) {
    return Api.get("/courses/" + id);
  }

  createCourse(course) {
    return Api.post("/courses", course);
  }

  updateCourse(course) {
    return Api.put("/courses", course);
  }

  deleteCourse(id) {
    return Api.delete("/courses/" + id);
  }
}

export default new CoursesApi();
