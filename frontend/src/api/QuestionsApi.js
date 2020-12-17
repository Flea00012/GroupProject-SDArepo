import Api from "./Api";

class QuestionsApi {
  getAllQuestions() {
    return Api.get("/questions");
  }

  getQuestionById(id) {
    return Api.get("/questions/" + id);
  }

  createQuestion(question) {
    return Api.post("/questions", question);
  }

  deleteQuestion(id) {
    return Api.delete("/questions/" + id);
  }
}

export default new QuestionsApi();
