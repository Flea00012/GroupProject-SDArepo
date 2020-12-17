import Api from "./Api";

class AssignmentsApi {
  postAssignment({
    course,
    assignmentTitle,
    assignmentDescription,
    dueDate,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
  }) {
    return Api.post("/assignments", {
      course,
      assignmentTitle,
      assignmentDescription,
      dueDate,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
    });
  }

  getAll() {
    return Api.get("/assignments");
  }

  getAllAssignment(course) {
    return Api.get("/assignments/courseId/" + course);
  }

  deleteAssignment(id) {
    return Api.delete("/assignments/" + id);
  }

  getAssignmentById(id) {
    return Api.get("/assignments/" + id);
  }

  updateAssignment({
    id,
    assignmentTitle,
    assignmentDescription,
    dueDate,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    course,
  }) {
    return Api.put("/assignments", {
      id,
      assignmentTitle,
      assignmentDescription,
      dueDate,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      question10,
      course,
    });
  }
}

export default new AssignmentsApi();
