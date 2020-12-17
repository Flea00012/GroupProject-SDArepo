//base level Axios instance with BaseUrl
import Api from './Api';

//class component with the Axios instance for courses
class CoursesApi {
  getAllCourses() {
    return Api.get('/courses');
  }

  getCourseById(id) {
    console.log('Value of courseId in API' + id);
    return Api.get('/courses/' + id);
  }

  createCourse(course) {
    return Api.post('/courses', course);
  }

  updateCourse(course) {
    console.log("I'm updated... or am I?", course);
    return Api.put('/courses', course);
  }

  deleteCourse(id) {
    return Api.delete('/courses/' + id);
  }
}

export default new CoursesApi();
