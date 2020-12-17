import Api from "./Api";

class AnsweredAssignmentsApi {
  getAssignmentAnswerByUserID(assignmentId, userId) {
    return Api.get("assignments/" + assignmentId + "/student/" + userId);
  }

  getAllAnsweredAssignments() {
    return Api.get("/assignments/answered");
  }

  getAllAnsweredAssignmentsByCourseId(courseId) {
    return Api.get("/assignments/answeredByCourseId/" + courseId);
  }
  getAnsweredAssignmenttById(id) {
    return Api.get("/assignments/answered/" + id);
  }

  getAnsweredAssignmenttByAssignmentId(id) {
    return Api.get("/assignments/answeredByAssignmentId/" + id);
  }

  createAnsweredAssignment(answeredAssignment) {
    return Api.post("/assignments/answered", answeredAssignment);
  }

  updateAnsweredAssignment(updatedAssignment) {
    return Api.put("/assignments/answered", updatedAssignment);
  }

  deleteAnsweredAssignment(id) {
    return Api.delete("/assignments/answered/" + id);
  }

  getCurrentUser() {
    return Api.get("/currentUser");
  }
}

export default new AnsweredAssignmentsApi();
