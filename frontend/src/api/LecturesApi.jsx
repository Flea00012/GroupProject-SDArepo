import Api from "./Api";

class LecturesApi {
  getAllLectures() {
    return Api.get("/videos");
  }

  getAllVideos(course) {
    return Api.get("/videos/?courseId=" + course);
  }

  createLecture(video) {
    return Api.post("/videos", video);
  }

  updateLecture(video) {
    return Api.put("/videos", video);
  }

  deleteLecture(id) {
    return Api.delete("/videos/" + id);
  }
}

export default new LecturesApi();
